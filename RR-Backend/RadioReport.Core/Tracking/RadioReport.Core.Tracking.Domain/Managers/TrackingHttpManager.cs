using System;
using System.IO;
using System.Threading.Tasks;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Models;

namespace RadioReport.Core.Tracking.Domain.Managers
{
    public class TrackingHttpManager : ITrackingHttpManager
    {
        private readonly ITrackingService _trackingService;
        private readonly ICsvExportService _csvExportService;

        public TrackingHttpManager(ITrackingService trackingService, ICsvExportService csvExportService)
        {
            _trackingService = trackingService;
            _csvExportService = csvExportService;
        }

        public Task StartStopTracking(StartStopTrackingRequest request) => _trackingService.StartStopTracking(request);

        public Task RemoveTracking(RemoveTrackingRequest request) => _trackingService.RemoveTracking(request);

        public Task<(Stream Stream, string FileName)> ExportCsv() => _csvExportService.ExportCsv();

        public Task<(Stream Stream, string FileName)> ExportCsvByReportId(Guid reportId) => _csvExportService.ExportCsvByReportId(reportId);

        public Task<(Stream Stream, string FileName)> ExportCsvByUserId(Guid userId) => _csvExportService.ExportCsvByUserId(userId);
    }
}
