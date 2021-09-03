using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Confluent.Kafka;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Models;
using RadioReport.Core.InstituteManager.Domain.Interfaces;

namespace RadioReport.Core.InstituteManager.Domain.HostedServices
{
    public class InstituteManagerKafkaService : KafkaConsumerHostedServiceBase
    {
        private readonly IKafkaProducer _kafkaProducer;

        public InstituteManagerKafkaService(ConsumerConfig consumerConfig, IKafkaProducer kafkaProducer, IServiceScopeFactory serviceScopeFactory,
            ICacheService cacheService, ILogger<InstituteManagerKafkaService> logger) : base(consumerConfig, logger, serviceScopeFactory, cacheService)
        {
            _kafkaProducer = kafkaProducer;
        }

        protected override IEnumerable<string> Topics { get; } = new[]
        {
            KafkaTopic.Request.GetInstitute,
            KafkaTopic.Request.GetInstitutes,
            KafkaTopic.Request.ValidateInstituteTokenSync,
            KafkaTopic.Request.GetDuplicateImportAllowedDataSync
        };

        protected override async Task OnMessageReadAsync(string topic, string message, string key, IServiceScope serviceScope)
        {
            if (serviceScope == null) throw new ArgumentNullException(nameof(serviceScope));

            switch (topic)
            {
                case KafkaTopic.Request.GetInstitutes:
                    await HandleGetInstitutesRequest(message, key, serviceScope);
                    break;
                case KafkaTopic.Request.ValidateInstituteTokenSync:
                    await HandleValidateInstituteTokenSync(message, serviceScope);
                    break;
                case KafkaTopic.Request.GetInstitute:
                    await HandleGetInstituteSyncRequest(message, serviceScope);
                    break;
                case KafkaTopic.Request.GetDuplicateImportAllowedDataSync:
                    await HandleGetDuplicateImportAllowedDataSyncRequest(message, serviceScope);
                    break;
            }
        }

        private async Task HandleGetInstituteSyncRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<GetInstituteSyncRequest>();
            var response = new GetInstituteSyncResponse();
            var manager = serviceScope.ServiceProvider.GetRequiredService<IInstituteManager>();

            response.Institute = await manager.GetInstitute(request.InstituteId, request.Level);
            response.IsSuccess = response.Institute != null;

            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }

        private async Task HandleGetInstitutesRequest(string message, string key, IServiceScope serviceScope)
        {
            var request = message.Deserialize<GetInstitutesRequest>();
            var institutes = new List<Institute>();
            var repository = serviceScope.ServiceProvider.GetRequiredService<IInstituteRepository>();

            if (!request.InstituteIds.IsNullOrEmpty())
            {
                institutes.AddRange(await repository.GetByIdsAsync(request.InstituteIds));
            }
            else
            {
                institutes.AddRange(await repository.GetAllAsync());
            }

            var httpAuthContext = serviceScope.ServiceProvider.GetRequiredService<HttpAuthContext>();
            var topic = $"{request.ResponseTopicPrefix}-{KafkaTopic.Response.GetInstitutesSuffix}";
            await _kafkaProducer.WriteMessage(topic, institutes.AsJson(), httpAuthContext, key);
        }

        private async Task HandleValidateInstituteTokenSync(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<ValidateInstituteTokenRequest>();
            var response = new ValidateInstituteTokenResponse();
            var institute = serviceScope.ServiceProvider.GetRequiredService<IInstituteManager>().SearchInstituteToken(request.InstituteToken);
            response.IsSuccess = institute != null;
            response.IsValid = institute != null;
            response.Institute = institute;
            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }

        private async Task HandleGetDuplicateImportAllowedDataSyncRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<GetDuplicateImportAllowedDataSyncRequest>();
            var response = new GetDuplicateImportAllowedDataSyncResponse();

            var httpAuthContext = serviceScope.ServiceProvider.GetRequiredService<HttpAuthContext>();
            var manager = serviceScope.ServiceProvider.GetRequiredService<IInstituteManager>();
            var instituteService = serviceScope.ServiceProvider.GetRequiredService<IInstituteService>();

            var institute = await manager.GetByIdAsync(httpAuthContext.InstituteId);
            if (institute == null) throw new InstituteNotFoundException(httpAuthContext.InstituteId);

            var availableModules = await instituteService.GetAvailableModules();

            response.IsDuplicateAllowed = institute.DuplicateExternalIdentifierAllowed;
            response.AvailableModules.AddRange(availableModules);
            response.IsSuccess = true;

            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }
    }
}
