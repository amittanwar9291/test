using RadioReport.Common.Enums;

namespace RadioReport.Common.Consts
{
    public static class KafkaTopic
    {
        public const string ReportCreated = "report-created";
        public const string ReportUpdated = "report-updated";
        public const string ReportUpdatedFrontend = "report-updated-frontend";
        public const string ReportCreatedTracking = "report-created-tracking";
        public const string ReportUpdatedTracking = "report-updated-tracking";

        public static class Request
        {
            public const string ExportReport = "export-report-request";
            public const string GetOrAddPatientSync = "get-add-patient-sync-request";
            public const string GetPatientSync = "get-patient-sync-request";
            public const string GetPatientsSync = "get-patients-sync-request";
            public const string FilterPatientsSync = "filter-patients-sync-request";
            public const string GetInstitute = "get-institute-sync-request";
            public const string GetInstitutes = "get-institutes-request";
            public const string ListReports = "list-reports-request";
            public const string GetAuthTokenSync = "get-auth-token-sync-request";
            public const string UpdateReportPages = "update-report-pages";
            public const string ValidateInstituteTokenSync = "validate-institute-token-sync-request";
            public const string ValidateClientTokenSync = "validate-client-token-sync-request";
            public const string GetUserSync = "get-user-sync-request";
            public const string GetUsersSync = "get-users-sync-request";
            public const string AddReportSync = "add-report-sync-request";
            public const string HtmlRender = "html-render-request";
            public const string BulkHtmlRender = "bulk-html-render-request";
            public const string SetReportStatus = "set-report-status-request";
            public const string GetCvi42XmlSync = "get-cvi42xml-sync-request";
            public const string HtmlTemplateRender = "html-template-render-request";
            public const string AddUserSync = "add-user-sync-request";
            public const string RemoveReportSession = "remove-report-session-request";
            public const string RemoveAllReportSessions = "remove-all-report-sessions-request";
            public const string ReportSessionLockCleanup = "report-session-lock-cleanup-request";
            public const string LicenseIncrementSync = "license-increment-sync-request";
            public const string GetDuplicateImportAllowedDataSync = "get-duplicate-import-allowed-data-sync-request";
            public const string CheckExistingImport = "check-existing-import-request";
            public const string GetReportSessionViewModel = "get-report-session-viewmodel-request";
        }

        public static class Response
        {
            public const string GetInstitutesSuffix = "get-institutes-response";
            public const string ListReports = "list-reports-response";
        }

        public static class Anonymous
        {
            public const string AcknowledgeAvailableModule = "acknowledge-available-module";
        }

        public static string Create(ModuleType moduleType, string topic) => $"{moduleType.GetReportTypeName().ToUpperInvariant()}-{topic}";
    }
}
