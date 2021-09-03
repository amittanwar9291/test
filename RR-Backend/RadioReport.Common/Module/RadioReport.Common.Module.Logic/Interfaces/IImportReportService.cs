using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IImportReportService
    {
        Task<Report> ImportReport(ImportReportRequest request);
        
        Task<Report> UpdateAfterCreate(Report report);
    }
}
