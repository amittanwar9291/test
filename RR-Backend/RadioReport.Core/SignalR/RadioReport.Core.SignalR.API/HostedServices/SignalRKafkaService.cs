using System.Collections.Generic;
using System.Threading.Tasks;
using Confluent.Kafka;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Core.SignalR.API.Hubs;
using RadioReport.Core.SignalR.API.Interfaces;
using RadioReport.Core.SignalR.Domain.Consts;
using RadioReport.Core.SignalR.Domain.Interfaces;
using RadioReport.Core.SignalR.Domain.Models;

namespace RadioReport.Core.SignalR.API.HostedServices
{
    public class SignalRKafkaService : KafkaConsumerHostedServiceBase
    {
        private readonly IHubContext<ReportSessionHub, IReportSessionHub> _reportSessionHub;
        private readonly IHubContext<ReportListHub, IReportListHub> _reportListHub;
        private readonly IConnectionManager _connectionManager;

        public SignalRKafkaService(
            ConsumerConfig consumerConfig,
            ILogger<SignalRKafkaService> logger,
            ICacheService cacheService,
            IHubContext<ReportSessionHub, IReportSessionHub> reportSessionHub,
            IHubContext<ReportListHub, IReportListHub> reportListHub,
            IConnectionManager connectionManager,
            IServiceScopeFactory serviceScopeFactory
        ) : base(consumerConfig, logger, serviceScopeFactory, cacheService)
        {
            _reportSessionHub = reportSessionHub;
            _reportListHub = reportListHub;
            _connectionManager = connectionManager;
        }

        protected override IEnumerable<string> Topics => new[] { KafkaTopic.Request.UpdateReportPages, KafkaTopic.ReportUpdatedFrontend };

        protected override async Task OnMessageReadAsync(string topic, string message, string key, IServiceScope serviceScope)
        {
            switch (topic)
            {
                case KafkaTopic.Request.UpdateReportPages:
                    await HandleUpdateReportPages(message);
                    break;
                case KafkaTopic.ReportUpdatedFrontend:
                    await HandleReportUpdatedFrontend(message);
                    break;
            }
        }

        private async Task HandleUpdateReportPages(string message)
        {
            var reportData = message.Deserialize<ReportData>();
            var reportSessionIdentifier = new ReportSessionIdentifier(reportData).Value;
            var connectionId = await _connectionManager.GetConnectionId(HubNames.ReportSession, reportSessionIdentifier);
            if (!connectionId.IsNullOrEmpty())
            {
                await _reportSessionHub.Clients.Client(connectionId).UpdatePages();
            }
        }

        private async Task HandleReportUpdatedFrontend(string message)
        {
            var request = message.Deserialize<UpdateReportRequest>();
            await _reportListHub.Clients.All.UpdateReport(request.ReportId.ToString(), request.ReportStatus.ToString(), request.IsLocked);
        }
    }
}
