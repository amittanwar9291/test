using System.Collections.Immutable;

namespace RadioReport.Common.Consts
{
    public static class ConfigurationConsts
    {
        public const int RedisConnectTimeoutMs = 10000;
#if DEBUG
        public const int KafkaSyncRequestTimeoutMs                   = 300000;
        public const int KafkaObservableRequestTimeoutMs             = 300000;
        public const int KafkaObservableCheckExistingImportTimeoutMs = 300000;
        public const int LicenseIncrementKafkaSyncRequestTimeoutMs   = 400000;
#else
        public const int KafkaSyncRequestTimeoutMs = 10000;
        public const int KafkaObservableRequestTimeoutMs = 10000;
        public const int KafkaObservableCheckExistingImportTimeoutMs = 10000;
        public const int LicenseIncrementKafkaSyncRequestTimeoutMs = 30000;
#endif
        public const int SqlCommandTimeoutSec               = 60;
        public const int ExportReportTimeout                = 60000;
        public const int DefaultMinIOPresignedUrlExpiary    = 60000;
        public const int ImportUploadUrlExpiry              = 60000;
        public const int AvailableModulesPointerSwitchTime  = 10000;
        public const int ImageMiniatureHeightInPixels       = 200;
        public const int HtmlRenderViewportWidthAdjustment  = 9;
        public const int HtmlRenderViewportHeightAdjustment = 8;
        public const int HtmlRenderMinIOLifetime            = 60000;
        public const int ReportSessionLockExpirationHours   = 8;

        public const int ReportListDefaultPageSize  = 100;
        public const int LicenseListDefaultPageSize = 30;

        public const string RsdEndpointPrefix          = "RSD";
        public const string AvailableModulesPathSuffix = "/InstituteManager/Institutes/GetAvailableModules";

        public static readonly ImmutableList<string> UseInstituteTokenPaths = ImmutableList.Create(
            "importinterface/importcvi42",
            "exportinterface/export",
            "exportinterface/exportbyquery"
        );

        public const string VaultSecretsTransitKeyName          = "rr";
        public const string VaultSecretsKeyValueMountPoint      = "kv-v1";
        public const string VaultSecretsKeyValueEnvironmentPath = "environment";

        public const int SignalRConnectionInterruptThresholdSeconds = 3;
    }
}
