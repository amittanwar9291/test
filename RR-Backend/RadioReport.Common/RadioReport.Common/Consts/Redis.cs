namespace RadioReport.Common.Consts
{
    public static class Redis
    {
        public static class ReservedKeys
        {
            public const string AvailableModulesPointer = "available-modules-pointer";
        }

        public static class Prefixes
        {
            public const string SignalR = nameof(SignalR);
            public const string AvailableModules = nameof(AvailableModules);
            public const string AcknowledgeExport = nameof(AcknowledgeExport);
            public const string AccessToken = nameof(AccessToken);
            public const string ReportCredit = nameof(ReportCredit);
        }

        public static class Expirations
        {
            public const int AccessTokenMinutes = 10;
            public const int HtmlRenderResultMinutes = 5;
            public const int SignalRConnectionDays = 1;
            public const int KafkaSyncRequestMinutes = 1;
            public const int TrackingEventHours = 5;
            public const int ReportCreditHours = 8;
        }
    }
}
