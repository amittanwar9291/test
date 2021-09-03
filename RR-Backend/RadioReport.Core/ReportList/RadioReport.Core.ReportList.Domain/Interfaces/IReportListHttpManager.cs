using System.IO;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.ReportList.Domain.Interfaces
{
    public interface IReportListHttpManager : IManager<ReportEntry>
    {
        Task<ReportListResponse> GetWithPatient(ReportListOptions options);
        Task<(Stream Stream, string FileName)> ExportCsvReportList();
    }
}
