using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Enums;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IReportService
    {
        Task UpdatePageId(Guid reportId, Guid pageId, string pageTypeName);
        Task<Report> UpdateStatus(Guid reportId, ReportStatus status);
        Task<List<Report>> UpdateStatus(string studyInstanceUid, ReportStatus status);
        Task<ReportResult> UpdateReportResult(ReportResult reportResult);
        Task<ReportResult> ApproveReportResult(ReportResult reportResult);
        Task ClearReportApproval(Guid reportId);
        Task<ReportResult> GetExistingReportResult(Guid reportId, string reportTypeName);
        Task<IEnumerable<ReportResult>> GetExistingReportResults(Guid reportId);
        Task<(Report Report, Patient Patient)> GetWithPatient(Guid reportId);
        Task<ReportSession> CreateReportSession(Report report);
        Task RemoveReportSession(Guid reportId);
        Task<ReportSessionResult> VerifyReportSession(Guid reportId);
    }
}
