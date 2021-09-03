using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Confluent.Kafka;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums.Models;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Models;
using RadioReport.Core.LicenseManager.Domain.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Domain.HostedServices
{
    public class LicenseManagerKafkaService : KafkaConsumerHostedServiceBase
    {
        public LicenseManagerKafkaService(
            ConsumerConfig consumerConfig,
            ILogger<LicenseManagerKafkaService> logger,
            IServiceScopeFactory serviceScopeFactory,
            ICacheService cacheService
        ) : base(consumerConfig, logger, serviceScopeFactory, cacheService)
        {
        }

        protected override IEnumerable<string> Topics { get; } = new[] { KafkaTopic.Request.LicenseIncrementSync };

        protected override async Task OnMessageReadAsync(string topic, string message, string key, IServiceScope serviceScope)
        {
            if (serviceScope == null) throw new ArgumentNullException(nameof(serviceScope));

            switch (topic)
            {
                case KafkaTopic.Request.LicenseIncrementSync:
                    await HandleLicenseIncrementSync(message, serviceScope);
                    break;
            }
        }

        private async Task HandleLicenseIncrementSync(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<LicenseIncrementSyncRequest>();

            await serviceScope.ServiceProvider.GetRequiredService<ILicenseIncrementHandler>().HandleLicenseIncrement(request);
        }
    }
}
