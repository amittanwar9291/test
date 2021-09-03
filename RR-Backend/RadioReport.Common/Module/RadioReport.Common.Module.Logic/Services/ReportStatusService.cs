using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.Common.Module.Logic.Services
{
    public class ReportStatusService : IReportStatusService
    {
        private readonly HttpAuthContext _httpAuthContext;
        private readonly DbContext _dbContext;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly EnvironmentContext _environmentContext;

        public ReportStatusService(
            HttpAuthContext httpAuthContext,
            DbContext dbContext,
            IKafkaProducer kafkaProducer,
            EnvironmentContext environmentContext)
        {
            _httpAuthContext = httpAuthContext;
            _dbContext = dbContext;
            _kafkaProducer = kafkaProducer;
            _environmentContext = environmentContext;
        }

        public async Task<Report> UpdateReportStatusAsync(Report report, ReportStatus newStatus, bool persist)
        {
            if (report == null) throw new ArgumentNullException(nameof(report));

            if (report.InstituteId != _httpAuthContext.InstituteId && !_httpAuthContext.InstituteId.IsEmpty())
                throw new InvalidInstituteIdException($"InstituteId missmatch.");

            if (report.Status == newStatus) return report;

            switch (newStatus)
            {
                case ReportStatus.Unknown:
                    ThrowStatusChangeException();
                    break;
                case ReportStatus.Open:
                case ReportStatus.InProgress:
                    break;
                case ReportStatus.Completed:
                    if (report.Status != ReportStatus.Approved) ThrowStatusChangeException();
                    break;
                case ReportStatus.Exported:
                    if (report.Status != ReportStatus.Approved && report.Status != ReportStatus.Completed) ThrowStatusChangeException();
                    break;
                case ReportStatus.Canceled:
                    if (report.Status != ReportStatus.Generated && report.Status != ReportStatus.InProgress) ThrowStatusChangeException();
                    break;
                case ReportStatus.Approved:
                    if (report.Status != ReportStatus.Generated) ThrowStatusChangeException();
                    break;
                case ReportStatus.Generated:
                    //TODO Remove when Frontend is fixed and no second call to generate text is requested
                    var finishStati = new List<ReportStatus> { ReportStatus.Exported, ReportStatus.Approved, ReportStatus.Completed };
                    if (finishStati.Contains(report.Status)) return report;
                    if (report.Status != ReportStatus.InProgress) ThrowStatusChangeException();

                    break;
            }

            if (persist)
            {
                report.Status = newStatus;
                await _dbContext.SaveChangesAsync();
            }

            var updateRequestJson = new UpdateReportRequest
            {
                ReportId = report.Id,
                ReportStatus = report.Status,
                IsLocked = report.IsLocked
            }.AsJson();

            await _kafkaProducer.WriteMessage(KafkaTopic.ReportUpdated, updateRequestJson, _httpAuthContext);
            await _kafkaProducer.WriteMessage(KafkaTopic.ReportUpdatedFrontend, updateRequestJson, _httpAuthContext);
            if (_environmentContext.Tracking == Tracking.Enabled)
            {
                await _kafkaProducer.WriteMessage(KafkaTopic.ReportUpdatedTracking, updateRequestJson, _httpAuthContext);
            }

            return report;

            void ThrowStatusChangeException() => throw new InvalidReportStatusChangeException(report.Status.ToString(), newStatus.ToString());
        }

        public async Task<Report> UpdateReportStatusAsync(Guid reportId, ReportStatus newStatus, bool persist)
        {
            var report = await _dbContext.Set<Report>().Include(r => r.Pages).FirstOrDefaultAsync(r => r.Id == reportId);

            if (report == null) throw new ReportNotFoundException();

            return await UpdateReportStatusAsync(report, newStatus, persist);
        }

        public async Task<ReportStatus> GetReportStatusAsync(Guid reportId)
        {
            var report = await _dbContext.Set<Report>().FirstOrDefaultAsync(r => r.Id == reportId);

            return report.Status;
        }
    }
}
