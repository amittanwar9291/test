using System;
using RadioReport.Common.Extensions;
using static RadioReport.Common.Consts.Redis;

namespace RadioReport.Common.Helpers
{
    public static class RedisKeyHelper
    {
        public static string ReportCredit(Guid reportId)
        {
            if (reportId.IsEmpty()) throw new ArgumentNullException(nameof(reportId));

            return CreateKey(Prefixes.ReportCredit, reportId.ToString());
        }

        public static string SignalR(string hub, string identifier)
        {
            if (hub.IsNullOrEmpty()) throw new ArgumentNullException(nameof(hub));
            if (identifier.IsNullOrEmpty()) throw new ArgumentNullException(nameof(identifier));

            return CreateKey(Prefixes.SignalR, $"{hub}-{identifier}");
        }

        public static string AvailableModules() => CreateKey(Prefixes.AvailableModules, Guid.NewGuid().ToString());

        public static string AcknowledgeExport(string cacheKey)
        {
            if (cacheKey.IsNullOrEmpty()) throw new ArgumentNullException(nameof(cacheKey));

            return CreateKey(Prefixes.AcknowledgeExport, cacheKey);
        }

        public static string AccessToken(Guid userId) => CreateKey(Prefixes.AccessToken, userId.ToString());

        private static string CreateKey(string prefix, string value) => $"{prefix}_{value.ToUpperInvariant()}";
    }
}
