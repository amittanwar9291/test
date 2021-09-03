using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Interfaces;
using StackExchange.Redis;

namespace RadioReport.Common.Logic.Services
{
    public class RedisCacheService : ICacheService
    {
        private readonly IConnectionMultiplexer _connectionMultiplexer;

        public RedisCacheService(IConnectionMultiplexer connectionMultiplexer)
        {
            _connectionMultiplexer = connectionMultiplexer;
        }

        public async Task<string> Get(string key) => await _connectionMultiplexer.GetDatabase().StringGetAsync(key);

        public async Task<string> Pop(string key)
        {
            var value = await Get(key);
            await Remove(key);

            return value;
        }

        public async Task<(bool Exists, string Value)> TryGet(string key)
        {
            if (!await Exists(key))
            {
                return (false, string.Empty);
            }

            return (true, await Get(key));
        }

        public List<string> ListKeys(string pattern) =>
            _connectionMultiplexer.GetServer(_connectionMultiplexer.Configuration.Split(',')[0]).Keys(pattern: pattern)
                .Select(redisKey => redisKey.ToString()).ToList();

        public async Task<bool> Exists(string key) => await _connectionMultiplexer.GetDatabase().KeyExistsAsync(key);

        public async Task Set(string key, string value, TimeSpan expiry) =>
            await _connectionMultiplexer.GetDatabase().StringSetAsync(key, value, expiry);

        public async Task<bool> Remove(string key) => await _connectionMultiplexer.GetDatabase().KeyDeleteAsync(key);

        public async Task<IEnumerable<string>> GetList(string key) =>
            (await _connectionMultiplexer.GetDatabase().ListRangeAsync(key)).Select(r => r.ToString());

        public async Task AddToList(string key, string value) =>
            await _connectionMultiplexer.GetDatabase().ListRightPushAsync(key, value);
    }
}
