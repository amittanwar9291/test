using System;
using RadioReport.Common.Consts;

namespace RadioReport.Common.Models
{
    public abstract class KafkaCachingRequestBase
    {
        protected KafkaCachingRequestBase(string topic)
        {
            Topic = topic;
            CacheKey = $"{topic}-{Guid.NewGuid()}";
            CacheLifeTimeMinutes = Redis.Expirations.KafkaSyncRequestMinutes;
        }

        public string Topic { get; set; }
        public string MessageKey { get; set; }
        public string CacheKey { get; set; }
        public bool KeepCacheEntry { get; set; }
        public long CacheLifeTimeMinutes { get; set; }
    }
}
