using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Confluent.Kafka;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Request;
using RadioReport.Common.Logic.Models.Kafka.Response;
using RadioReport.Common.Models;
using RadioReport.Core.ImportInterface.Domain.Interfaces;

namespace RadioReport.Core.ImportInterface.Domain.HostedServices
{
    public class ImportInterfaceKafkaService : KafkaConsumerHostedServiceBase
    {
        private readonly IKafkaProducer _kafkaProducer;

        public ImportInterfaceKafkaService(ConsumerConfig consumerConfig, IKafkaProducer kafkaProducer,
            IServiceScopeFactory serviceScopeFactory,
            ICacheService cacheService, ILogger<ImportInterfaceKafkaService> logger) : base(consumerConfig, logger,
            serviceScopeFactory, cacheService)
        {
            _kafkaProducer = kafkaProducer;
        }

        protected override IEnumerable<string> Topics { get; } = new[]
        {
            KafkaTopic.Request.GetCvi42XmlSync
        };

        protected override async Task OnMessageReadAsync(string topic, string message, string key,
            IServiceScope serviceScope)
        {
            switch (topic)
            {
                case KafkaTopic.Request.GetCvi42XmlSync:
                    await HandleGetCvi42XmlSync(message, key, serviceScope);
                    break;
            }
        }

        private async Task HandleGetCvi42XmlSync(string message, string key, IServiceScope serviceScope)
        {
            var request = message.Deserialize<GetCvi42XmlSyncRequest>();
            var response = new GetCvi42XmlSyncResponse();
            var minIOService = serviceScope.ServiceProvider.GetService<IMinIOService>();
            var httpAuthContext = serviceScope.ServiceProvider.GetService<HttpAuthContext>();
            var cvi42ImportsRepository = serviceScope.ServiceProvider.GetService<ICVI42ImportsRepository>();

            var importExists = await cvi42ImportsRepository.AnyAsync(importEntry =>
                importEntry.InstituteId == httpAuthContext.InstituteId &&
                importEntry.StudyInstanceUid == request.StudyInstanceUid);

            if (importExists)
            {
                response.JsonContent = await minIOService.GetObjectAsync(MinIO.Buckets.CVI42Data,
                    $"{httpAuthContext.InstituteId}/{request.StudyInstanceUid}/{MinIO.CVI42FileName}");
            }
            else
            {
                response.Exist = false;
                response.IsSuccess = true;
            }

            await CacheService.Set(request.CacheKey, response.AsJson(),
                TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }
    }
}
