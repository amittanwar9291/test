using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using RadioReport.Core.ReportList.Domain.Interfaces;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.ReportList.Domain.Services
{
    public class ExportCsvService : IExportCsvService
    {
        private readonly IExportCsvManager _exportCsvManager;

        public ExportCsvService(IExportCsvManager exportCsvManager)
        {
            _exportCsvManager = exportCsvManager;
        }

        public async Task<(Stream Stream, string FileName)> ExportCsvReportList()
        {
            var stream = GetMemoryStream(await _exportCsvManager.GetExportCsvData());
            var fileName = GetFileName("ReportList-Export-All");

            return (stream, fileName);
        }

        private static Stream GetMemoryStream(IEnumerable<ReportEntry> reportData)
        {
            var memoryStream = new MemoryStream();
            using (var writer = new StreamWriter(memoryStream, leaveOpen: true))
            {
                writer.WriteLine(
                     $"\"{nameof(ReportEntry.UserLabel)}\";" +
                     $"\"{nameof(ReportEntry.Id)}\";" +
                     $"\"{nameof(ReportEntry.CreationDate)}\";" +
                     $"\"{nameof(ReportEntry.FindingsDate)}\";" +
                     $"\"{nameof(ReportEntry.Status)}\";"
                );

                foreach (var report in reportData)
                {
                    writer.WriteLine(
                        $"\"{report.UserLabel}\";" +
                        $"\"{report.Id}\";" +
                        $"\"{report.CreationDate}\";" +
                        $"\"{report.FindingsDate}\";" +
                        $"\"{report.Status}\";"
                    );
                }
            }
            memoryStream.Position = 0;

            return memoryStream;
        }

        private static string GetFileName(string prefix) => $"{prefix}-{DateTime.Now:yyyy-MM-dd}.csv";
    }
}
