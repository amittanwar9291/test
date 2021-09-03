using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using RadioReport.Core.SignalR.Domain.Models;

namespace RadioReport.Core.SignalR.API.HostedServices
{
    public class TaskQueueService : BackgroundService
    {
        private readonly ILogger<TaskQueueService> _logger;
        private readonly TaskQueue                 _taskQueue;

        public TaskQueueService(ILogger<TaskQueueService> logger, TaskQueue taskQueue)
        {
            _logger    = logger;
            _taskQueue = taskQueue;
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            try
            {
                await Task.Run(
                    async () =>
                    {
                        while (!cancellationToken.IsCancellationRequested)
                        {
                            try
                            {
                                if (_taskQueue.TryDequeue(out var task))
                                {
                                    Task.Run(task, cancellationToken);
                                }

                                await Task.Delay(200, cancellationToken);
                            }
                            catch (Exception loopException)
                            {
                                _logger.LogError(loopException, loopException.Message);
                            }
                        }
                    },
                    cancellationToken
                );
            }
            catch (Exception exception)
            {
                _logger.LogError(exception, exception.Message);
            }
        }
    }
}
