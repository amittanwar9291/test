using Confluent.Kafka;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using LinqKit;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Extensions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Http.Requests;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models;

namespace RadioReport.Common.Module.Logic.Services
{
    public class ModuleKafkaService : KafkaConsumerHostedServiceBase
    {
        private readonly ModuleContext _moduleContext;

        protected override IEnumerable<string> Topics => new[]
        {
            KafkaTopic.Anonymous.AcknowledgeAvailableModule,
            KafkaTopic.Request.SetReportStatus,
            KafkaTopic.Request.ReportSessionLockCleanup,
            KafkaTopic.Request.ExportReport,
            KafkaTopic.Request.CheckExistingImport,
            KafkaTopic.Request.GetReportSessionViewModel,
            KafkaTopic.Request.RemoveAllReportSessions,
            KafkaTopic.Create(_moduleContext.Type, KafkaTopic.Request.ExportReport),
            KafkaTopic.Create(_moduleContext.Type, KafkaTopic.Request.AddReportSync),
            KafkaTopic.Create(_moduleContext.Type, KafkaTopic.Request.RemoveReportSession)
        };

        public ModuleKafkaService(
            ConsumerConfig consumerConfig,
            IServiceScopeFactory serviceScopeFactory,
            ModuleContext moduleContext,
            ILogger<ModuleKafkaService> logger,
            ICacheService cacheService
        ) : base(consumerConfig, logger, serviceScopeFactory, cacheService)
        {
            _moduleContext = moduleContext;
        }

        protected override async Task OnMessageReadAsync(string topic, string message, string key, IServiceScope serviceScope)
        {
            if (serviceScope == null) throw new ArgumentNullException(nameof(serviceScope));

            if (topic == KafkaTopic.Anonymous.AcknowledgeAvailableModule)
            {
                await HandleAvailableModuleAnonymousRequest(key);
            }
            else if (topic == KafkaTopic.Request.SetReportStatus)
            {
                await HandleSetReportStatus(message, serviceScope);
            }
            else if (topic == KafkaTopic.Create(_moduleContext.Type, KafkaTopic.Request.ExportReport) || topic == KafkaTopic.Request.ExportReport)
            {
                await HandleExportReportRequest(message, serviceScope, topic == KafkaTopic.Request.ExportReport);
            }
            else if (topic == KafkaTopic.Create(_moduleContext.Type, KafkaTopic.Request.AddReportSync))
            {
                await HandleAddReportRequest(message, serviceScope);
            }
            else if (topic == KafkaTopic.Create(_moduleContext.Type, KafkaTopic.Request.RemoveReportSession))
            {
                await HandleRemoveReportSession(message, serviceScope);
            }
            else if (topic == KafkaTopic.Request.ReportSessionLockCleanup)
            {
                await HandleReportSessionLockCleanup(serviceScope);
            }
            else if (topic == KafkaTopic.Request.CheckExistingImport)
            {
                await HandleCheckExistingImport(message, serviceScope);
            }
            else if (topic == KafkaTopic.Request.GetReportSessionViewModel)
            {
                await HandleGetReportSessionViewModel(message, serviceScope);
            }
            else if (topic == KafkaTopic.Request.RemoveAllReportSessions)
            {
                await HandleRemoveAllReportSessions(serviceScope);
            }
        }

        private static async Task HandleSetReportStatus(string message, IServiceScope serviceScope)
        {
            var setReportStatusRequest = message.Deserialize<SetReportStatusRequest>();
            var manager = serviceScope.ServiceProvider.GetService<IReportService>();

            if (setReportStatusRequest.ReportId != null)
            {
                await manager.UpdateStatus(setReportStatusRequest.ReportId.Value, setReportStatusRequest.Status);
            }
            else
            {
                await manager.UpdateStatus(setReportStatusRequest.StudyInstanceUid, ReportStatus.Exported);
            }
        }

        private async Task HandleExportReportRequest(string message, IServiceScope serviceScope, bool moduleContextTypeMissing)
        {
            var exportRequest = message.Deserialize<GetReportExportSyncRequest>();
            var manager = serviceScope.ServiceProvider.GetService<IReportHttpManager>();

            var httpAuthContext = serviceScope.ServiceProvider.GetService<HttpAuthContext>();
            var report = await manager.GetFirstOrDefaultAsync(GetReportFilter(exportRequest.ExportRequest,
                httpAuthContext.InstituteId), new[] { nameof(Report.ReportResults) });

            if (report != null)
            {
                var dbReportResult = report.ReportResults?.Where(r =>
                    exportRequest.ExportRequest.ReportType != null &&
                    r.ReportTypeName.Contains(exportRequest.ExportRequest.ReportType,
                        StringComparison.CurrentCultureIgnoreCase)).FirstOrDefault();

                if (dbReportResult == null)
                {
                    return;
                }

                if (moduleContextTypeMissing)
                {
                    await CacheService.AddToList(RedisKeyHelper.AcknowledgeExport(exportRequest.CacheKey),
                        _moduleContext.Type.GetReportTypeName().ToUpperInvariant());
                }

                var parameter = GetReportTextGenerationParams(exportRequest.ExportRequest, dbReportResult, report);

                var pageManagers = serviceScope.ServiceProvider.GetService<IEnumerable<IPageManager>>();
                if (pageManagers != null)
                {
                    var reportResult = await manager.GenerateTextReport(parameter);

                    if (reportResult != null)
                    {
                        var exportResponse = new GetReportExportSyncResponse
                        {
                            IsSuccess = true,
                            ReportResult = reportResult
                        };

                        if (exportRequest.ExportRequest.AddReport)
                        {
                            exportResponse.Report = report;
                        }

                        await CacheService.AddToList(exportRequest.CacheKey, exportResponse.AsJson());
                    }
                }
            }
        }

        private ReportTextGenerationParams GetReportTextGenerationParams(ExportRequest exportRequest,
            ReportResult dbReportResult, Report report)
        {
            var retValue = new ReportTextGenerationParams
            {
                ReportTypeName = _moduleContext.Type + "_Doctor",
                LanguageCode = string.IsNullOrWhiteSpace(exportRequest.LanguageCode)
                    ? new CultureInfo(dbReportResult.Approved).IetfLanguageTag
                    : exportRequest.LanguageCode,
                IsReferenceImage = exportRequest.IsReferenceImage ?? dbReportResult.IsReferenceImage,
                IsIcd10 = exportRequest.IsIcd10 ?? dbReportResult.IsICD10,
                ReportId = report.Id
            };

            if (exportRequest.LocalizerType.HasValue)
            {
                switch (exportRequest.LocalizerType.Value)
                {
                    case LocalizerType.None:
                        retValue.LocalizerBackground = false;
                        retValue.LocalizerType = LocalizerType.None;
                        break;
                    case LocalizerType.Png:
                        retValue.LocalizerBackground = true;
                        retValue.LocalizerType = LocalizerType.Png;
                        break;
                    case LocalizerType.Svg:
                        retValue.LocalizerBackground = true;
                        retValue.LocalizerType = LocalizerType.Svg;
                        break;
                }
            }
            else
            {
                retValue.LocalizerType = LocalizerType.Png;
                retValue.LocalizerBackground = true;
            }

            return retValue;
        }

        private static ExpressionStarter<Report> GetReportFilter(ExportRequest request, Guid instituteId)
        {
            var predicate = PredicateBuilder.New<Report>(true);
            if (request.ReportId != default)
            {
                predicate.And(report => report.Id == request.ReportId);
            }
            else if (request.StudyInstanceUid != null)
            {
                predicate.And(report => report.StudyInstanceUID == request.StudyInstanceUid);
            }
            else if (request.AccessionNumber != null)
            {
                predicate.And(report => report.AccessionNumber == request.AccessionNumber);
            }
            predicate.And(report => report.InstituteId == instituteId);
            predicate.And(report => report.Status == ReportStatus.Approved || report.Status == ReportStatus.Exported);

            return predicate;
        }

        private async Task HandleAvailableModuleAnonymousRequest(string key) => await CacheService.AddToList(key, _moduleContext.Type.GetReportTypeName());

        private async Task HandleAddReportRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<AddReportSyncRequest>();
            var response = new AddReportSyncResponse();
            var manager = serviceScope.ServiceProvider.GetService<IReportHttpManager>();
            response.Report = await manager.AddAsync(request.Report);
            response.IsSuccess = !response.Report.Id.IsEmpty();
            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }

        private static async Task HandleRemoveReportSession(string message, IServiceScope serviceScope)
        {
            if (Guid.TryParse(message, out var reportId))
            {
                var reportService = serviceScope.ServiceProvider.GetRequiredService<IReportService>();
                await reportService.RemoveReportSession(reportId);
            }
        }

        private static async Task HandleReportSessionLockCleanup(IServiceScope serviceScope)
        {
            var reportSessionManager = serviceScope.ServiceProvider.GetRequiredService<IReportSessionManager>();
            var reportService = serviceScope.ServiceProvider.GetRequiredService<IReportService>();
            var olderThan = DateTime.Now.AddHours(-ConfigurationConsts.ReportSessionLockExpirationHours);
            var sessionToRemove = await reportSessionManager.GetManyAsync(r => r.CreationDate < olderThan);
            foreach (var reportSession in sessionToRemove)
            {
                await reportService.RemoveReportSession(reportSession.ReportId);
            }
        }

        private async Task HandleCheckExistingImport(string message, IServiceScope serviceScope)
        {
            var response = new CheckExistingImportSyncResponse();
            var request = message.Deserialize<CheckExistingImportRequest>();

            try
            {
                var manager = serviceScope.ServiceProvider.GetRequiredService<IReportManager>();
                var moduleContext = serviceScope.ServiceProvider.GetRequiredService<ModuleContext>();

                var existingImport = (await manager
                        .GetManyAsync(r =>
                            !string.IsNullOrEmpty(r.StudyInstanceUID) && r.StudyInstanceUID.ToUpper() == request.StudyInstanceUid.ToUpper() ||
                            !string.IsNullOrEmpty(r.AccessionNumber) && r.AccessionNumber.ToUpper() == request.AccessionNumber.ToUpper()))
                    .OrderByDescending(r => r.CreationDate)
                    .FirstOrDefault();

                if (existingImport != null)
                {
                    response.IsExisting = true;
                    response.ReportId = existingImport.Id;
                    response.ModuleType = moduleContext.Type;
                }

                await CacheService.AddToList(request.CacheKey, response.AsJson());
            }
            catch (Exception exception)
            {
                Logger.LogError(exception, exception.Message);

                await CacheService.AddToList(request.CacheKey, response.AsJson());
            }
        }

        private async Task HandleGetReportSessionViewModel(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<ReportSessionViewModelRequest>();
            var response = new ReportSessionViewModelResponse();

            try
            {
                var httpAuthContext = serviceScope.ServiceProvider.GetRequiredService<HttpAuthContext>();
                var sessionManager = serviceScope.ServiceProvider.GetRequiredService<IReportSessionManager>();
                var reportManager = serviceScope.ServiceProvider.GetRequiredService<IReportManager>();

                var sessions = await sessionManager.GetManyAsync(s => s.InstituteId == httpAuthContext.InstituteId);
                var reportIds = sessions.Select(s => s.ReportId);
                var reports = await reportManager.GetManyAsync(r => reportIds.Contains(r.Id));

                var sessionViewModels = sessions
                    .Select(session =>
                    {
                        var report = reports.Single(r => r.Id == session.ReportId);

                        return new ReportSessionViewModel
                        {
                            ModuleName = report.ExaminationType,
                            ReportId = session.ReportId,
                            ReportStatus = report.Status,
                            ReportCreationDate = report.CreationDate,
                            ReportSessionId = session.Id,
                            ReportSessionCreationDate = session.CreationDate,
                            UserId = session.UserId
                        };
                    })
                    .ToList();
                response.ReportSessions.AddRange(sessionViewModels);

                await CacheService.AddToList(request.CacheKey, response.AsJson());
            }
            catch (Exception exception)
            {
                Logger.LogError(exception, exception.Message);

                await CacheService.AddToList(request.CacheKey, response.AsJson());
            }
        }

        private static async Task HandleRemoveAllReportSessions(IServiceScope serviceScope)
        {
            var httpAuthContext = serviceScope.ServiceProvider.GetRequiredService<HttpAuthContext>();
            var sessionManager = serviceScope.ServiceProvider.GetRequiredService<IReportSessionManager>();
            var reportService = serviceScope.ServiceProvider.GetRequiredService<IReportService>();

            var sessions = await sessionManager.GetManyAsync(s => s.InstituteId == httpAuthContext.InstituteId);
            foreach (var session in sessions)
            {
                await reportService.RemoveReportSession(session.ReportId);
            }
        }
    }
}
