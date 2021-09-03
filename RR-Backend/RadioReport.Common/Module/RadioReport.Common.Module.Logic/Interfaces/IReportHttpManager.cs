using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Models;
using RadioReport.Common.Module.Logic.Models.Pages.Suggestions;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IReportHttpManager : IManager<Report>
    {
        Task<Report> GetSingleByExpression(Expression<Func<Report, bool>> expression);
        Task<int> CountReportByExpression(Expression<Func<Report, bool>> expression);
        Task<ReportResult> GetExistingReportResult(Guid reportId, string reportTypeName);
        Task<ReportResult> UpdateReportResult(ReportResult reportResult);
        Task<ReportResult> ApproveReportResult(ReportResult reportResult);
        Task<ReportResult> GenerateTextReport(ReportTextGenerationParams reportTextGenerationParams);
        IEnumerable<FieldIdsForPage> GetAvailableFieldIds();
        IDictionary<string, IEnumerable<string>> GetAvailableFindingTypes();
        IDictionary<string, IDictionary<string, string>> GetAvailableTranslations(string languageCode, string pageName);
        Task MarkPageAsModified(Guid reportId, Guid pageId);
        Task<ReportPatientResponse> GetWithPatient(Guid id);
        Task<Report> UpdateStatus(Guid reportId, ReportStatus status);
        Task<RequestResponse> ImportReport(ImportReportRequest request);
    }
}
