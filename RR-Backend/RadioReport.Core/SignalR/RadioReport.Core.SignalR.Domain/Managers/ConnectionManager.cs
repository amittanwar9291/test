using System;
using System.Threading.Tasks;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Interfaces;
using RadioReport.Core.SignalR.Domain.Interfaces;

namespace RadioReport.Core.SignalR.Domain.Managers
{
    public class ConnectionManager : IConnectionManager
    {
        private readonly ICacheService _cacheService;

        public ConnectionManager(ICacheService cacheService)
        {
            _cacheService = cacheService;
        }

        public async Task CacheConnection(string hub, string identifier, string connectionId)
        {
            var expiration = TimeSpan.FromDays(Redis.Expirations.SignalRConnectionDays);
            await _cacheService.Set(RedisKeyHelper.SignalR(hub, identifier), connectionId, expiration);
            await _cacheService.Set(RedisKeyHelper.SignalR(hub, connectionId), identifier, expiration);
        }

        public async Task<string> GetConnectionId(string hub, string identifier) => await _cacheService.Get(RedisKeyHelper.SignalR(hub, identifier));

        public async Task<string> GetIdentifier(string hub, string connectionId) => await _cacheService.Get(RedisKeyHelper.SignalR(hub, connectionId));

        public async Task RemoveCachedConnection(string hub, string connectionId)
        {
            var identifier = await _cacheService.Pop(RedisKeyHelper.SignalR(hub, connectionId));
            if (!identifier.IsNullOrEmpty())
            {
                await _cacheService.Remove(RedisKeyHelper.SignalR(hub, identifier));
            }
        }

        public async Task<bool> ConnectionExist(string hub, string identifier) => await _cacheService.Exists(RedisKeyHelper.SignalR(hub, identifier));
    }
}
