using System;
using System.IO;
using System.Threading.Tasks;
using RadioReport.Core.Tracking.Domain.Models;

namespace RadioReport.Core.Tracking.Domain.Interfaces
{
    public interface ITrackingHttpManager
    {
        Task StartStopTracking(StartStopTrackingRequest request);
        Task RemoveTracking(RemoveTrackingRequest request);
        Task<(Stream Stream, string FileName)> ExportCsv();
        Task<(Stream Stream, string FileName)> ExportCsvByReportId(Guid reportId);
        Task<(Stream Stream, string FileName)> ExportCsvByUserId(Guid userId);
    }
}
