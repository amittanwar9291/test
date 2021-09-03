namespace RadioReport.Common.API.Models
{
    public class AppSettings
    {
        public string KafkaBootstrapServer { get; set; }
        public string KafkaMaxMessageBytes { get; set; }
        public string EnvironmentContextDeploymentVariant { get; set; }
        public string EnvironmentContextDeploymentOptionsCvi42 { get; set; }
        public string EnvironmentContextTracking { get; set; }
        public string RedisConnection { get; set; }
        public string SeqConnection { get; set; }
        public string MinIOConfigAddress { get; set; }
        public string MinIOConfigAccessKey { get; set; }
        public string MinIOConfigSecretKey { get; set; }
        public string KeyStoreOptionsKeySecret { get; set; }
        public string PuppeteerConnectOptionsBrowserWSEndpoint { get; set; }
        public string LicenseIsActivated { get; set; }
        public string LicenseGracePeriodDays { get; set; }
        public string LicenseOverdraftPercentage { get; set; }
        public string LicenseOverdraftCap { get; set; }
        public string LicenseAutoLicenseUrl { get; set; }
        public string UsersJwtAccessExpirationMinutes { get; set; }
        public string UsersJwtRefreshExpirationMinutes { get; set; }
        public string UsersPasswordDefaultPassword { get; set; }
        public string UsersSaUserName { get; set; }
        public string UsersSaInitial { get; set; }
        public string UsersSaFirstName { get; set; }
        public string UsersSaSurname { get; set; }
        public string UsersSaSalutation { get; set; }
        public string UsersSaLanguageOfProgram { get; set; }
        public string UsersSaLanguageDoctorFindings { get; set; }
        public string UsersSaLanguagePatientFindings { get; set; }
        public string UsersSaPassword { get; set; }
        public string UsersSaRole { get; set; }
        public string UsersSaIsActive { get; set; }
        public string DbHost { get; set; }
        public string DbUser { get; set; }
        public string DbPassword { get; set; }
    }
}
