using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Models;

namespace RadioReport.Core.Tracking.Domain.Services
{
    public class CsvExportService : ICsvExportService
    {
        private readonly ITrackingManager _trackingManager;

        public CsvExportService(ITrackingManager trackingManager)
        {
            _trackingManager = trackingManager;
        }

        public async Task<(Stream Stream, string FileName)> ExportCsv()
        {
            var stream = GetMemoryStream(await _trackingManager.GetAll());
            var fileName = GetFileName("Tracking-All");

            return (stream, fileName);
        }

        public async Task<(Stream Stream, string FileName)> ExportCsvByReportId(Guid reportId)
        {
            var stream = GetMemoryStream(await _trackingManager.GetByReportId(reportId));
            var fileName = GetFileName($"Tracking-Report-{reportId}");

            return (stream, fileName);
        }

        public async Task<(Stream Stream, string FileName)> ExportCsvByUserId(Guid userId)
        {
            var stream = GetMemoryStream(await _trackingManager.GetByUserId(userId));
            var fileName = GetFileName($"Tracking-User-{userId}");

            return (stream, fileName);
        }

        private static Stream GetMemoryStream(IEnumerable<TrackingEntity> trackingData)
        {
            var memoryStream = new MemoryStream();
            using (var writer = new StreamWriter(memoryStream, leaveOpen: true))
            {
                writer.WriteLine(
                    $"\"{nameof(TrackingEntity.ReportId)}\";" +
                    $"\"{nameof(TrackingEntity.TrackingSubjectId)}\";" +
                    $"\"{nameof(TrackingEntity.TrackingSubjectType)}\";" +
                    $"\"{nameof(TrackingEntity.UserId)}\";" +
                    $"\"{nameof(TrackingEntity.ModuleName)}\";" +
                    $"\"Processing time (seconds)\";" +
                    $"\"Processing frequency\";" +
                    $"\"{nameof(TrackingEntity.InstituteId)}\";" +
                    $"\"{nameof(TrackingEntity.CreationDate)}\";" +
                    $"\"{nameof(TrackingEntity.LastModified)}\"");

                foreach (var tracking in trackingData)
                {
                    writer.WriteLine(tracking);
                }
            }
            memoryStream.Position = 0;

            return memoryStream;
        }

        private static string GetFileName(string prefix) => $"{prefix}-{DateTime.Now:yyyy-MM-dd}.csv";
    }
}
