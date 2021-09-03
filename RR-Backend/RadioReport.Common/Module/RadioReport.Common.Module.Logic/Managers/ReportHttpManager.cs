using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Module.Logic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Models;
using RadioReport.Common.Module.Logic.Models.Pages.Suggestions;

namespace RadioReport.Common.Module.Logic.Managers
{
    public class ReportHttpManager : IReportHttpManager
    {
        private readonly HttpAuthContext _httpAuthContext;
        private readonly ModuleContext _moduleContext;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly IReportManager _reportManager;
        private readonly IReportTextService _reportTextService;
        private readonly IReportPageService _reportPageService;
        private readonly ILicenseService _licenseService;
        private readonly IReportStatusService _reportStatusService;
        private readonly IReportService _reportService;
        private readonly IImportReportService _importReportService;
        private readonly ILogger<ReportHttpManager> _logger;
        private readonly EnvironmentContext _environmentContext;
        private readonly LicenseOptions _licenseOptions;

        public ReportHttpManager(
            IReportManager reportManager,
            IKafkaProducer kafkaProducer,
            ILogger<ReportHttpManager> logger,
            IImportReportService importReportService,
            HttpAuthContext httpAuthContext,
            IReportTextService reportTextService,
            IReportService reportService,
            ModuleContext moduleContext,
            IReportPageService reportPageService,
            ILicenseService licenseService,
            IReportStatusService reportStatusService,
            EnvironmentContext environmentContext,
            IOptions<LicenseOptions> licenseOptions
        )
        {
            if (licenseOptions == null) throw new ArgumentNullException(nameof(licenseOptions));

            _importReportService = importReportService;
            _reportManager = reportManager;
            _httpAuthContext = httpAuthContext;
            _reportTextService = reportTextService;
            _reportService = reportService;
            _moduleContext = moduleContext;
            _reportPageService = reportPageService;
            _licenseService = licenseService;
            _reportStatusService = reportStatusService;
            _kafkaProducer = kafkaProducer;
            _logger = logger;
            _environmentContext = environmentContext;
            _licenseOptions = licenseOptions.Value;
        }

        public async Task<Report> GetByIdAsync(Guid id, Expression<Func<Report, bool>> predicate = null)
        {
            var report = await GetByIdAsync(id, new[] { nameof(Report.Pages), nameof(Report.ReportResults) });
            if (report == null)
            {
                throw new ReportNotFoundException(id);
            }
            
            var i = 0;
            foreach (var pageInfo in report.Pages.OrderBy(pi => pi.PageNumber))
            {
                report.Pages[i] = pageInfo;
                i++;
            }

            if (!_moduleContext.Type.ReportSessionExcluded())
            {
                await _reportService.CreateReportSession(report);
            }

            return report;
        }

        public async Task<Report> GetByIdAsync(Guid id, string[] includes, Expression<Func<Report, bool>> predicate = null)
        {
            var report = await _reportManager.GetByIdAsync(id, includes);
            if (report == null)
            {
                throw new ReportNotFoundException(id);
            }

            return report;
        }

        public async Task<ReportPatientResponse> GetWithPatient(Guid reportId)
        {
            var (report, patient) = await _reportService.GetWithPatient(reportId);

            return new ReportPatientResponse
            {
                Report = report,
                Patient = patient.MapToDto()
            };
        }

        public Task<List<Report>> GetByIdsAsync(List<Guid> ids, Expression<Func<Report, bool>> predicate = null) => _reportManager.GetByIdsAsync(ids);

        public Task<Report> GetAsNoTrackingAsync(Guid id) => _reportManager.GetAsNoTrackingAsync(id);

        public Task<List<Report>> GetAllAsync() => _reportManager.GetAllAsync();

        public IQueryable<Report> GetManyQueryable(Expression<Func<Report, bool>> predicate) => _reportManager.GetManyQueryable(predicate);

        public Task<List<Report>> GetManyAsync(Expression<Func<Report, bool>> predicate) => _reportManager.GetManyAsync(predicate);

        public Task<Report> GetFirstOrDefaultAsync(Expression<Func<Report, bool>> predicate, string[] includes = null) =>
            _reportManager.GetFirstOrDefaultAsync(predicate, includes);

        public Task<Report> GetSingleAsync(Expression<Func<Report, bool>> predicate, string[] includes = null) =>
            _reportManager.GetSingleAsync(predicate, includes);

        public Task<Report> GetSingleOrDefaultAsync(Expression<Func<Report, bool>> predicate) => _reportManager.GetSingleOrDefaultAsync(predicate);

        public Task<bool> AnyAsync(Guid id) => _reportManager.AnyAsync(id);

        public Task<bool> AnyAsync(Expression<Func<Report, bool>> predicate) => _reportManager.AnyAsync(predicate);

        public async Task<Report> AddAsync(Report model, bool keepId = false)
        {
            if (model == null)
            {
                throw new ArgumentNullException(nameof(model));
            }

            if (model.Pages == null || model.Pages.Count == 0)
            {
                if (string.IsNullOrEmpty(model.PresetCode))
                {
                    model.PresetCode = "full";
                }

                model.Pages?.AddRange(_reportPageService.GetPagesForPreset(model.PresetCode));
                model.TotalPageCount = _moduleContext.TotalPageCount;
            }

            model.InstituteId = _httpAuthContext.InstituteId;
            model.UserId = _httpAuthContext.UserId;

            var result = await _reportManager.AddAsync(model, keepId);
            await _kafkaProducer.WriteMessage(KafkaTopic.ReportCreated, result.AsJson(), _httpAuthContext);

            if (_environmentContext.Tracking == Tracking.Enabled)
            {
                await _kafkaProducer.WriteMessage(KafkaTopic.ReportCreatedTracking, result.AsJson(), _httpAuthContext);
            }

            await UpdateAfterCreate(result);

            return result;
        }

        public virtual Task UpdateAfterCreate(Report report) => Task.CompletedTask;

        public Task AddRangeAsync(IEnumerable<Report> models) => _reportManager.AddRangeAsync(models);

        public Task<Report> UpdateAsync(Report model) => _reportManager.UpdateAsync(model);

        public Task UpdateByPropertiesAsync(Report model, IEnumerable<string> properties) => _reportManager.UpdateByPropertiesAsync(model, properties);

        public Task RemoveAsync(Guid id) => _reportManager.RemoveAsync(id);

        public Task RemoveAllAsync() => _reportManager.RemoveAllAsync();

        public Task<int> CountAsync(Expression<Func<Report, bool>> predicate) => _reportManager.CountAsync(predicate);

        public Task<bool> IsAlive() => _reportManager.IsAlive();

        public async Task<Report> GetSingleByExpression(Expression<Func<Report, bool>> expression)
        {
            var reports = await _reportManager.GetManyAsync(expression);
            if (reports.IsNullOrEmpty())
            {
                throw new ReportNotFoundException("Report matching expression cannot be found");
            }

            if (reports.Count > 1)
            {
                throw new DuplicatedReportIdentifierException("Report identifier not unique");
            }

            return reports[0];
        }

        public async Task<int> CountReportByExpression(Expression<Func<Report, bool>> expression) => await _reportManager.CountAsync(expression);

        public Task<ReportResult> GetExistingReportResult(Guid reportId, string reportTypeName) =>
            _reportService.GetExistingReportResult(reportId, reportTypeName);

        public Task<ReportResult> UpdateReportResult(ReportResult reportResult) => _reportService.UpdateReportResult(reportResult);

        public async Task<ReportResult> ApproveReportResult(ReportResult reportResult) => await _reportService.ApproveReportResult(reportResult);

        public async Task<ReportResult> GenerateTextReport(ReportTextGenerationParams reportTextGenerationParams)
        {
            if (reportTextGenerationParams == null) throw new ArgumentNullException(nameof(reportTextGenerationParams));

            if (_licenseOptions.IsActivated)
            {
                await _licenseService.VerifyLicense(reportTextGenerationParams);
            }

            var reportResult = await _reportTextService.GenerateTextReport(reportTextGenerationParams);
            await _reportStatusService.UpdateReportStatusAsync(reportResult.ReportId, ReportStatus.Generated, true);

            return reportResult;
        }

        public IEnumerable<FieldIdsForPage> GetAvailableFieldIds() => _reportPageService.GetAvailableFieldIds();

        public IDictionary<string, IEnumerable<string>> GetAvailableFindingTypes() => _reportPageService.GetAvailableFindingTypes();

        public IDictionary<string, IDictionary<string, string>> GetAvailableTranslations(string languageCode, string pageName) =>
            _reportPageService.GetAvailableTranslations(languageCode, pageName);

        public async Task MarkPageAsModified(Guid reportId, Guid pageId) => await _reportPageService.MarkPageAsModified(reportId, pageId);

        public Task<Report> UpdateStatus(Guid reportId, ReportStatus status) => _reportService.UpdateStatus(reportId, status);

        public async Task<RequestResponse> ImportReport(ImportReportRequest request)
        {
            var report = await _importReportService.ImportReport(request);

            return RequestResponse.Success(report.Id.ToString());
        }
    }
}
