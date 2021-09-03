using System.IO;
using System.Threading.Tasks;

namespace RadioReport.Core.ReportList.Domain.Interfaces
{
    public interface IExportCsvService
    {
        Task<(Stream Stream, string FileName)> ExportCsvReportList();
    }
}
