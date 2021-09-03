using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Core.SignalR.API.Interfaces;
using RadioReport.Core.SignalR.Domain.Consts;
using RadioReport.Core.SignalR.Domain.Interfaces;
using RadioReport.Core.SignalR.Domain.Models;

namespace RadioReport.Core.SignalR.API.Hubs
{
    public class ReportSessionHub : Hub<IReportSessionHub>
    {
        private readonly IConnectionManager _connectionManager;
        private readonly IKafkaProducer     _kafkaProducer;
        private readonly TaskQueue          _taskQueue;

        public ReportSessionHub(IConnectionManager connectionManager, IKafkaProducer kafkaProducer, TaskQueue taskQueue)
        {
            _connectionManager = connectionManager;
            _kafkaProducer     = kafkaProducer;
            _taskQueue         = taskQueue;
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();

            var reportId = Context.GetHttpContext().Request.Query[QueryParams.ReportId];
            var module   = Context.GetHttpContext().Request.Query[QueryParams.Module];

            var reportDataResult = ReportData.Create(reportId, module).OnFailureThrow(new InvalidReportDataException("Invalid report data"));
            var reportData       = reportDataResult.Value;

            if (reportData.ModuleType.ReportSessionExcluded()) return;

            var reportSessionIdentifier = new ReportSessionIdentifier(reportData).Value;

            await _connectionManager.CacheConnection(HubNames.ReportSession, reportSessionIdentifier, Context.ConnectionId);
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await base.OnDisconnectedAsync(exception);

            var reportSessionIdentifier = await _connectionManager.GetIdentifier(HubNames.ReportSession, Context.ConnectionId);

            var reportDataResult = ReportSessionIdentifier.Parse(reportSessionIdentifier).OnFailureThrow(new InvalidReportDataException("Invalid report data"));
            var reportData       = reportDataResult.Value;
            if (reportData.ModuleType.ReportSessionExcluded()) return;

            await _connectionManager.RemoveCachedConnection(HubNames.ReportSession, Context.ConnectionId);
            _taskQueue.Enqueue(
                async () =>
                {
                    await Task.Delay(TimeSpan.FromSeconds(ConfigurationConsts.SignalRConnectionInterruptThresholdSeconds));
                    var connectionExist = await _connectionManager.ConnectionExist(HubNames.ReportSession, reportSessionIdentifier);
                    if (!connectionExist)
                    {
                        var topic = KafkaTopic.Create(reportData.ModuleType, KafkaTopic.Request.RemoveReportSession);
                        await _kafkaProducer.WriteMessage(topic, reportData.ReportId.ToString(), HttpAuthContext.Anonymous);
                    }
                }
            );
        }
    }
}
