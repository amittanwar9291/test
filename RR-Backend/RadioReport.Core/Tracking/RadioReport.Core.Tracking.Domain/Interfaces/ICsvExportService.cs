using System;
using System.IO;
using System.Threading.Tasks;

namespace RadioReport.Core.Tracking.Domain.Interfaces
{
    public interface ICsvExportService
    {
        Task<(Stream Stream, string FileName)> ExportCsv();
        Task<(Stream Stream, string FileName)> ExportCsvByReportId(Guid reportId);
        Task<(Stream Stream, string FileName)> ExportCsvByUserId(Guid userId);
    }
}
