using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Quartz;
using RadioReport.Common.Consts;
using RadioReport.Common.Helpers;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Kafka;

namespace RadioReport.Core.Scheduler.Domain.Jobs
{
    public class AvailableModulesJob : IJob
    {
        private readonly ICacheService _cacheService;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly ILogger<AvailableModulesJob> _logger;

        public AvailableModulesJob(ICacheService cacheService, IKafkaProducer kafkaProducer, ILogger<AvailableModulesJob> logger)
        {
            _cacheService = cacheService;
            _kafkaProducer = kafkaProducer;
            _logger = logger;
        }

        public async Task Execute(IJobExecutionContext context)
        {
            var curAvailableModulesPointer = await _cacheService.Exists(Redis.ReservedKeys.AvailableModulesPointer);
            var newAvailableModulesPointer = RedisKeyHelper.AvailableModules();

            await _kafkaProducer.WriteMessageAnonymous(KafkaTopic.Anonymous.AcknowledgeAvailableModule, newAvailableModulesPointer, newAvailableModulesPointer);

            if (curAvailableModulesPointer) await Task.Delay(ConfigurationConsts.AvailableModulesPointerSwitchTime);

            await _cacheService.Set(Redis.ReservedKeys.AvailableModulesPointer, newAvailableModulesPointer, TimeSpan.MaxValue);
            if (curAvailableModulesPointer)
            {
                var availableModulesKeys = _cacheService.ListKeys($"{Redis.Prefixes.AvailableModules}*");
                availableModulesKeys = availableModulesKeys.Except(new List<string> { newAvailableModulesPointer }).ToList();
                availableModulesKeys.ForEach(async key =>
                {
                    if (!await _cacheService.Remove(key))
                    {
                        _logger.LogWarning($"Could not remove Redis Entry {key}!");
                    }
                });
            }
        }
    }
}
