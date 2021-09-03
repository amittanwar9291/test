using System;
using Confluent.Kafka;
using RadioReport.Common.Consts;
using RadioReport.Core.ReportList.Domain.Interfaces;
using RadioReport.Core.ReportList.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
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

namespace RadioReport.Core.ReportList.Domain.HostedServices
{
    public class ReportListKafkaService : KafkaConsumerHostedServiceBase
    {
        private readonly IKafkaProducer _kafkaProducer;
        private readonly IMapper _mapper;

        public ReportListKafkaService(
            ConsumerConfig consumerConfig,
            IKafkaProducer kafkaProducer,
            ILogger<ReportListKafkaService> logger,
            IMapper mapper,
            IServiceScopeFactory serviceScopeFactory,
            ICacheService cacheService
        ) : base(consumerConfig, logger, serviceScopeFactory, cacheService)
        {
            _kafkaProducer = kafkaProducer;
            _mapper = mapper;
        }

        protected override IEnumerable<string> Topics { get; } = new[]
        {
            KafkaTopic.ReportCreated,
            KafkaTopic.ReportUpdated
        };

        protected override async Task OnMessageReadAsync(string topic, string message, string key, IServiceScope serviceScope)
        {
            if (serviceScope == null) throw new ArgumentNullException(nameof(serviceScope));

            switch (topic)
            {
                case KafkaTopic.ReportCreated:
                    await HandleReportCreated(message, serviceScope);
                    break;
                case KafkaTopic.ReportUpdated:
                    await HandleReportUpdated(message, serviceScope);
                    break;
            }
        }

        private async Task HandleReportCreated(string message, IServiceScope serviceScope)
        {
            var report = message.Deserialize<Report>();
            if (report == null) return;

            var reportEntry = _mapper.Map<ReportEntry>(report);
            var getUserRequest = new GetUserSyncRequest
            {
                UserId = reportEntry.UserId
            };
            var httpAuthContext = serviceScope.ServiceProvider.GetRequiredService<HttpAuthContext>();
            var getUserResponse = await _kafkaProducer.SendSynchronousRequest<GetUserSyncResponse>(getUserRequest, httpAuthContext);
            if (!getUserResponse.IsSuccess)
            {
                throw new GetUserFailedException();
            }

            if (getUserResponse.User == null)
            {
                throw new UserNotFoundException($"User not found. UserId {reportEntry.UserId}");
            }

            reportEntry.UserLabel = getUserResponse.User?.Initial;
            var manager = serviceScope.ServiceProvider.GetRequiredService<IReportEntryManager>();
            await manager.AddAsync(reportEntry, true);
        }

        private static async Task HandleReportUpdated(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<UpdateReportRequest>();
            if (request == null) return;

            var manager = serviceScope.ServiceProvider.GetRequiredService<IReportEntryManager>();
            var existingEntry = await manager.GetByIdAsync(request.ReportId);
            if (existingEntry == null) return;

            UpdateReport(request, existingEntry);
            await manager.UpdateAsync(existingEntry);
        }

        private static void UpdateReport(UpdateReportRequest request, ReportBase existingEntry)
        {
            existingEntry.Status = request.ReportStatus;
            existingEntry.IsLocked = request.IsLocked;
        }
    }
}
