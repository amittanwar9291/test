using System;
using Confluent.Kafka;
using RadioReport.Common.Consts;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Models;
using System.Linq;

namespace RadioReport.Core.Tracking.Domain.HostedServices
{
    public class TrackingKafkaService : KafkaConsumerHostedServiceBase
    {
        private readonly IKafkaProducer _kafkaProducer;

        public TrackingKafkaService(
            ConsumerConfig consumerConfig,
            IKafkaProducer kafkaProducer,
            ILogger<TrackingKafkaService> logger,
            IServiceScopeFactory serviceScopeFactory,
            ICacheService cacheService
        ) : base(consumerConfig, logger, serviceScopeFactory, cacheService)
        {
            _kafkaProducer = kafkaProducer;
        }

        protected override IEnumerable<string> Topics { get; } = new[]
        {
            KafkaTopic.ReportCreatedTracking,
            KafkaTopic.ReportUpdatedTracking
        };

        protected override async Task OnMessageReadAsync(string topic, string message, string key, IServiceScope serviceScope)
        {
            if (serviceScope == null) throw new ArgumentNullException(nameof(serviceScope));

            switch (topic)
            {
                case KafkaTopic.ReportCreatedTracking:
                    await HandleReportCreated(message, serviceScope);
                    break;
                case KafkaTopic.ReportUpdatedTracking:
                    await HandleTrackingUpdate(message, serviceScope);
                    break;
            }
        }

        private async Task HandleReportCreated(string message, IServiceScope serviceScope)
        {
            var report = message.Deserialize<Report>();
            if (report == null) return;

            var getUserRequest = new GetUserSyncRequest
            {
                UserId = report.UserId
            };
            var httpAuthContext = serviceScope.ServiceProvider.GetRequiredService<HttpAuthContext>();
            var getUserResponse = await _kafkaProducer.SendSynchronousRequest<GetUserSyncResponse>(getUserRequest, httpAuthContext);
            if (!getUserResponse.IsSuccess)
            {
                throw new GetUserFailedException();
            }

            if (getUserResponse.User == null)
            {
                throw new UserNotFoundException($"User not found. UserId {report.UserId}");
            }

            var trackingEntry = new TrackingEntity
            {
                ReportId = report.Id,
                InstituteId = report.InstituteId,
                UserId = report.UserId,
                TrackingSubjectId = "Report",
                TrackingSubjectType = TrackingSubjectType.Report,
                ModuleName = report.ExaminationType,
                CreationDate = report.CreationDate,
                ReportStatus = report.Status
            };

            var manager = serviceScope.ServiceProvider.GetRequiredService<ITrackingManager>();
            await manager.Add(trackingEntry);
        }

        private static async Task HandleTrackingUpdate(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<UpdateReportRequest>();
            if (request == null) return;

            var manager = serviceScope.ServiceProvider.GetRequiredService<ITrackingManager>();
            var existingEntries = await manager.GetByReportId(request.ReportId);
            if (!existingEntries.Any()) return;

            // updating all entries with new reportstatus
            foreach(var entry in existingEntries)
            {
                entry.ReportStatus = request.ReportStatus;
                await manager.Update(entry);
            }
        }
    }
}
