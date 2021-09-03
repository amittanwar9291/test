using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Models;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IReportTextService
    {
        Task<ReportResult> GenerateTextReport(ReportTextGenerationParams reportTextGenerationParams);
    }
}
