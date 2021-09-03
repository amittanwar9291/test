using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Interfaces.ReportGenerator
{
    public interface IDocumentGenerator
    {
        Task<string> GenerateDocumentFromReport(ReportSchema reportSchema, ReportResult reportSettings, string lang);
        IEnumerable<ReportSummaryModel> GenerateReportSummary(ReportSchema reportSchema, ReportResult reportSettings);
    }
}
