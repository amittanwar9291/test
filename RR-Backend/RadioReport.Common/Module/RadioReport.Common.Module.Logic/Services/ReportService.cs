using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Enums;
using RadioReport.Common.Module.Logic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Helpers;
using RadioReport.Common.Interfaces;

namespace RadioReport.Common.Module.Logic.Services
{
    public class ReportService : IReportService
    {
        private readonly IReportManager _reportManager;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly ModuleContext _moduleContext;
        private readonly IReportSessionManager _reportSessionManager;
        private readonly IReportStatusService _reportStatusService;
        private readonly ICacheService _cacheService;
        private readonly EnvironmentContext _environmentContext;

        public ReportService(
            IReportManager reportManager,
            IKafkaProducer kafkaProducer,
            HttpAuthContext httpAuthContext,
            ModuleContext moduleContext,
            IReportSessionManager reportSessionManager,
            IReportStatusService reportStatusService,
            ICacheService cacheService,
            EnvironmentContext environmentContext
        )
        {
            _reportManager = reportManager;
            _kafkaProducer = kafkaProducer;
            _httpAuthContext = httpAuthContext;
            _moduleContext = moduleContext;
            _reportSessionManager = reportSessionManager;
            _reportStatusService = reportStatusService;
            _cacheService = cacheService;
            _environmentContext = environmentContext;
        }

        public async Task UpdatePageId(Guid reportId, Guid pageId, string pageTypeName)
        {
            var report = await _reportManager.GetByIdAsync(reportId, new[] { nameof(Report.Pages) });
            var pageInfo = report.Pages.FirstOrDefault(p => p.TypeName == pageTypeName);
            if (pageInfo != null && (pageInfo.PageId == Guid.Empty || pageInfo.PageId != Guid.Empty && pageId == Guid.Empty))
            {
                pageInfo.PageId = pageId;
            }

            await _reportManager.UpdateAsync(report);
        }

        public async Task<Report> UpdateStatus(Guid reportId, ReportStatus status) =>
            await _reportStatusService.UpdateReportStatusAsync(reportId, status, true);

        public async Task<List<Report>> UpdateStatus(string studyInstanceUid, ReportStatus status)
        {
            var reports = await _reportManager.GetManyAsync(r => r.StudyInstanceUID == studyInstanceUid);
            foreach (var report in reports)
            {
                await _reportStatusService.UpdateReportStatusAsync(report, ReportStatus.Exported, true);
            }

            return reports;
        }

        public async Task<ReportResult> UpdateReportResult(ReportResult reportResult)
        {
            if (reportResult == null) throw new ArgumentNullException(nameof(reportResult));
            if (reportResult.ReportId == Guid.Empty) throw new ArgumentException(nameof(reportResult.ReportId));

            var report = await _reportManager.GetByIdAsync(reportResult.ReportId, new[] { nameof(Report.ReportResults) });
            if (report == null)
            {
                throw new ReportNotFoundException(reportResult.ReportId);
            }

            var existingResult = report.ReportResults.FirstOrDefault(r => r.ReportTypeName == reportResult.ReportTypeName);
            if (existingResult != null)
            {
                existingResult.Discussion = reportResult.Discussion;
                existingResult.IsDeleted = reportResult.IsDeleted;
                existingResult.IsLocalizer = reportResult.IsLocalizer;
                existingResult.IsReferenceImage = reportResult.IsReferenceImage;
                existingResult.IsICD10 = reportResult.IsICD10;
                existingResult.Approved = reportResult.Approved;
                existingResult.InstituteId = existingResult.InstituteId.IsEmpty() ? _httpAuthContext.InstituteId : existingResult.InstituteId;
                existingResult.ReportSummary = reportResult.ReportSummary;
                reportResult = existingResult;
            }
            else
            {
                reportResult.Id = Guid.Empty;
                reportResult.InstituteId = _httpAuthContext.InstituteId;
                report.ReportResults.Add(reportResult);
            }
            await _reportManager.UpdateAsync(report);

            return reportResult;
        }

        public async Task<ReportResult> ApproveReportResult(ReportResult reportResult)
        {
            var result = await UpdateReportResult(reportResult);
            await UpdateStatus(reportResult.ReportId, ReportStatus.Approved);

            return result;
        }

        public async Task ClearReportApproval(Guid reportId)
        {
            var reportResults = await GetExistingReportResults(reportId);
            foreach (var reportResult in reportResults)
            {
                reportResult.Approved = null;
                await UpdateReportResult(reportResult);
            }
            await UpdateStatus(reportId, ReportStatus.InProgress);
        }

        public async Task<ReportResult> GetExistingReportResult(Guid reportId, string reportTypeName)
        {
            ReportResult result = null;
            var report = await _reportManager.GetByIdAsync(reportId, new[] { nameof(Report.ReportResults) });
            if (report?.ReportResults != null)
            {
                result = report.ReportResults.FirstOrDefault(r => r.ReportTypeName == reportTypeName);
            }

            return result;
        }

        public async Task<IEnumerable<ReportResult>> GetExistingReportResults(Guid reportId)
        {
            var report = await _reportManager.GetByIdAsync(reportId, new[] { nameof(Report.ReportResults) });
            return report?.ReportResults ?? Enumerable.Empty<ReportResult>();
        }

        public async Task<(Report Report, Patient Patient)> GetWithPatient(Guid reportId)
        {
            var report = await _reportManager.GetByIdAsync(reportId);
            if (report.PatientId.IsEmpty()) throw new ArgumentException(nameof(report.PatientId));
            
            var patientRequest = new GetPatientSyncRequest
            {
                PatientId = report.PatientId
            };
            var patientResponse = await _kafkaProducer.SendSynchronousRequest<GetPatientSyncResponse>(patientRequest, _httpAuthContext);
            if (!patientResponse.IsSuccess) throw new PatientNotFoundException(report.PatientId);

            var patient = patientResponse.PatientDto.MapToPatient(_httpAuthContext);

            return (report, patient);
        }

        public async Task<ReportSession> CreateReportSession(Report report)
        {
            if (report == null) throw new ArgumentNullException(nameof(report));

            var reportSession = await _reportSessionManager.AddAsync(ReportSession.Create(report.Id, _httpAuthContext));

            await UpdateIsLocked(report, true);

            return reportSession;
        }

        public async Task RemoveReportSession(Guid reportId)
        {
            await _reportSessionManager.RemoveByReportId(reportId);
            await _cacheService.Remove(RedisKeyHelper.ReportCredit(reportId));
            var report = await _reportManager.GetByIdAsync(reportId);
            if (report == null) throw new ReportNotFoundException(reportId);

            await UpdateIsLocked(report, false);
        }

        public async Task<ReportSessionResult> VerifyReportSession(Guid reportId)
        {
            if (_moduleContext.Type.ReportSessionExcluded()) return ReportSessionResult.ReportSessionExcluded;

            var reportSession = await _reportSessionManager.GetByReportId(reportId);
            if (reportSession == null) return ReportSessionResult.NoSessionExists;

            return IsSessionOwner(reportSession) ? ReportSessionResult.SessionOwner : ReportSessionResult.ReportLocked;
        }

        private async Task UpdateIsLocked(Report report, bool isLocked)
        {
            report.IsLocked = isLocked;
            await _reportManager.UpdateAsync(report);

            var updateRequestJson = new UpdateReportRequest
            {
                // all relevant properties must be set since overriding current frontend state
                ReportId = report.Id,
                ReportStatus = report.Status,
                IsLocked = report.IsLocked
            }.AsJson();

            await _kafkaProducer.WriteMessage(KafkaTopic.ReportUpdated, updateRequestJson, _httpAuthContext);
            await _kafkaProducer.WriteMessage(KafkaTopic.ReportUpdatedFrontend, updateRequestJson, _httpAuthContext);
            if(_environmentContext.Tracking == Tracking.Enabled)
            {
                await _kafkaProducer.WriteMessage(KafkaTopic.ReportUpdatedTracking, updateRequestJson, _httpAuthContext);
            }
        }

        private bool IsSessionOwner(ReportSession reportSession) =>
            reportSession.UserId == _httpAuthContext.UserId && reportSession.InstituteId == _httpAuthContext.InstituteId;
    }
}
