using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Confluent.Kafka;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.User;
using RadioReport.Core.Users.Domain.Interfaces;

namespace RadioReport.Core.Users.Domain.HostedServices
{
    public class UsersKafkaService : KafkaConsumerHostedServiceBase
    {
        public UsersKafkaService(ConsumerConfig consumerConfig, ILogger<UsersKafkaService> logger, IServiceScopeFactory serviceScopeFactory,
            ICacheService cacheService) : base(consumerConfig, logger, serviceScopeFactory, cacheService)
        {
        }

        protected override IEnumerable<string> Topics { get; } = new[]
        {
            KafkaTopic.Request.GetAuthTokenSync,
            KafkaTopic.Request.GetUserSync,
            KafkaTopic.Request.GetUsersSync,
            KafkaTopic.Request.ValidateClientTokenSync,
            KafkaTopic.Request.AddUserSync
        };

        protected override async Task OnMessageReadAsync(string topic, string message, string key, IServiceScope serviceScope)
        {
            if (serviceScope == null) throw new ArgumentNullException(nameof(serviceScope));

            switch (topic)
            {
                case KafkaTopic.Request.GetAuthTokenSync:
                    await HandleGetAuthTokenSyncRequest(message, serviceScope);
                    break;
                case KafkaTopic.Request.GetUserSync:
                    await HandleGetUserSyncRequest(message, serviceScope);
                    break;
                case KafkaTopic.Request.GetUsersSync:
                    await HandleGetUsersSyncRequest(message, serviceScope);
                    break;
                case KafkaTopic.Request.ValidateClientTokenSync:
                    await HandleValidateClientTokenSync(message, serviceScope);
                    break;
                case KafkaTopic.Request.AddUserSync:
                    await HandleAddUserSyncRequest(message, serviceScope);
                    break;
            }
        }

        private async Task HandleAddUserSyncRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<AddUserSyncRequest>();
            var response = new AddUserSyncResponse();

            var service = serviceScope.ServiceProvider.GetRequiredService<IUserViewModelService>();
            response.User = await service.CreateAsync(request.User);
            response.IsSuccess = true;

            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }

        private async Task HandleValidateClientTokenSync(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<ValidateClientTokenRequest>();
            var response = new ValidateClientTokenResponse();
            var manager = serviceScope.ServiceProvider.GetRequiredService<IClientTokenService>();
            response.IsValid = await manager.ValidateClientToken(request.ClientTokenId, request.Browser, request.OperatingSystem, request.Application);
            response.IsSuccess = true;
            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }

        private async Task HandleGetAuthTokenSyncRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<GetAuthTokenSyncRequest>();
            var response = new GetAuthTokenSyncResponse();
            var manager = serviceScope.ServiceProvider.GetRequiredService<IAuthTokenService>();
            if (!request.AccessTokenId.IsEmpty())
            {
                response.AuthToken = manager.GetByAccessTokenIdAndApplication(request.UserId, request.AccessTokenId, request.Application);
            }
            else if (!request.RefreshTokenId.IsEmpty())
            {
                response.AuthToken = manager.GetByRefreshTokenIdAndApplication(request.UserId, request.RefreshTokenId, request.Application);
            }

            response.IsInvalidated = response.AuthToken == null;
            response.IsSuccess = true;
            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(request.CacheLifeTimeMinutes));
        }

        private async Task HandleGetUserSyncRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<GetUserSyncRequest>();
            var response = new GetUserSyncResponse();
            var manager = serviceScope.ServiceProvider.GetRequiredService<IUserViewModelService>();

            UserViewModel user;
            if (!request.UserName.IsNullOrEmpty())
            {
                user = await manager.GetByUserName(request.UserName);
            }
            else
            {
                user = await manager.GetById(request.UserId.ToString());
            }
            if (user != null)
            {
                response.User = user;
            }

            response.IsSuccess = true;
            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }

        private async Task HandleGetUsersSyncRequest(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<GetUsersSyncRequest>();
            var response = new GetUsersSyncResponse();
            var manager = serviceScope.ServiceProvider.GetRequiredService<IUserViewModelService>();
            var users = request.UserIds.IsNullOrEmpty() ? await manager.GetAll() : await manager.GetByIds(request.UserIds.Select(i => i.ToString()));
            if (!users.IsNullOrEmpty())
            {
                response.Users.AddRange(users);
            }

            response.IsSuccess = true;
            await CacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
        }
    }
}
