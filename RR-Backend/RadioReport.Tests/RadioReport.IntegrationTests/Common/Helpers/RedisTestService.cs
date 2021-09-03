using RadioReport.Common.Logic.Services;
using StackExchange.Redis;

namespace RadioReport.IntegrationTests.Common.Helpers
{
    public class RedisTestService
    {
        private readonly string _redisServer;

        public RedisTestService(string redisServer)
        {
            _redisServer = redisServer;
        }

        public RedisCacheService CreateRedisService()
        {
            var redisOptions = ConfigurationOptions.Parse(_redisServer);
            redisOptions.ConnectTimeout = 20000;

            return new RedisCacheService(ConnectionMultiplexer.Connect(redisOptions));
        }
    }
}
