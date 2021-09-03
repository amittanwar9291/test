using System;
using Microsoft.Extensions.Configuration;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Common.Models;

namespace RadioReport.Common.API.Services
{
    public class VaultConfigurationProvider : ConfigurationProvider
    {
        private readonly VaultOptions _options;

        public VaultConfigurationProvider(VaultOptions options)
        {
            _options = options ?? throw new ArgumentNullException(nameof(options));
        }

        public override void Load()
        {
            var vaultClient = VaultHelper.CreateClient(_options);

            AppSettings appSettings;
            if (_options.IsConfigMocked)
            {
                appSettings = GetMockedAppSettings();
            }
            else
            {
                var secretData = vaultClient.V1.Secrets.KeyValue.V1.ReadSecretAsync<AppSettings>(ConfigurationConsts.VaultSecretsKeyValueEnvironmentPath,
                    ConfigurationConsts.VaultSecretsKeyValueMountPoint);
                appSettings = secretData.Result.Data;
            }

            Set("Kafka:Producer:bootstrapservers", appSettings.KafkaBootstrapServer);
            Set("Kafka:Consumer:bootstrapservers", appSettings.KafkaBootstrapServer);
            Set("Kafka:MaxMessageBytes", appSettings.KafkaMaxMessageBytes);
            Set("EnvironmentContext:DeploymentVariant", appSettings.EnvironmentContextDeploymentVariant);
            Set("EnvironmentContext:DeploymentOptions:Cvi42", appSettings.EnvironmentContextDeploymentOptionsCvi42);
            Set("EnvironmentContext:Tracking", appSettings.EnvironmentContextTracking);
            Set("RedisConnection", appSettings.RedisConnection);
            Set("SeqConnection", appSettings.SeqConnection);
            Set("MinIOConfig:Address", appSettings.MinIOConfigAddress);
            Set("MinIOConfig:AccessKey", appSettings.MinIOConfigAccessKey);
            Set("MinIOConfig:SecretKey", appSettings.MinIOConfigSecretKey);
            Set("KeyStoreOptions:KeySecret", appSettings.KeyStoreOptionsKeySecret);
            Set("PuppeteerConnectOptions:BrowserWSEndpoint", appSettings.PuppeteerConnectOptionsBrowserWSEndpoint);
            Set("License:IsActivated", appSettings.LicenseIsActivated);
            Set("License:GracePeriodDays", appSettings.LicenseGracePeriodDays);
            Set("License:OverdraftPercentage", appSettings.LicenseOverdraftPercentage);
            Set("License:OverdraftCap", appSettings.LicenseOverdraftCap);
            Set("License:AutoLicenseUrl", appSettings.LicenseAutoLicenseUrl);
            Set("Users:Jwt:accessExpirationMinutes", appSettings.UsersJwtAccessExpirationMinutes);
            Set("Users:Jwt:refreshExpirationMinutes", appSettings.UsersJwtRefreshExpirationMinutes);
            Set("Users:Password:DefaultPassword", appSettings.UsersPasswordDefaultPassword);
            AddSaUserConfig(appSettings);
            Set("DbHost", appSettings.DbHost);
            Set("DbUser", appSettings.DbUser);
            Set("DbPassword", appSettings.DbPassword);
        }

        private void AddSaUserConfig(AppSettings appSettings)
        {
            Set("Users:Users:UserName", appSettings.UsersSaUserName);
            Set("Users:Users:Initial", appSettings.UsersSaInitial);
            Set("Users:Users:FirstName", appSettings.UsersSaFirstName);
            Set("Users:Users:Surname", appSettings.UsersSaSurname);
            Set("Users:Users:Salutation", appSettings.UsersSaSalutation);
            Set("Users:Users:LanguageOfProgram", appSettings.UsersSaLanguageOfProgram);
            Set("Users:Users:LanguageDoctorFindings", appSettings.UsersSaLanguageDoctorFindings);
            Set("Users:Users:LanguagePatientFindings", appSettings.UsersSaLanguagePatientFindings);
            Set("Users:Users:Password", appSettings.UsersSaPassword);
            Set("Users:Users:Role", appSettings.UsersSaRole);
            Set("Users:Users:IsActive", appSettings.UsersSaIsActive);
        }

        private static AppSettings GetMockedAppSettings() =>
            new AppSettings
            {
                RedisConnection = "redis:6379",
                SeqConnection = "http://seq:5341",
                KafkaBootstrapServer = "broker:29092",
                KafkaMaxMessageBytes = "10485880",
                EnvironmentContextDeploymentVariant = "1",
                EnvironmentContextDeploymentOptionsCvi42 = "false",
                EnvironmentContextTracking = "Enabled",
                KeyStoreOptionsKeySecret = "cRfUjXn2r5u8x/A?D(G+KbPeSgVkYp3s",
                MinIOConfigAddress = "minio:9000",
                MinIOConfigAccessKey = "Nw3HKxPzB9itOOu4JlszFDz1DpARtsct",
                MinIOConfigSecretKey = "ywKW1jtK1hK76lXoTTjvW6TsOjDRB8JC",
                PuppeteerConnectOptionsBrowserWSEndpoint = "ws://browserless:3000",
                LicenseIsActivated = "false",
                LicenseGracePeriodDays = "7",
                LicenseOverdraftPercentage = "5",
                LicenseOverdraftCap = "100",
                LicenseAutoLicenseUrl = "http://localhost:8080",
                UsersJwtAccessExpirationMinutes = "240",
                UsersJwtRefreshExpirationMinutes = "1440",
                UsersPasswordDefaultPassword = "N30-q",
                DbHost = "postgres",
                DbUser = "sa",
                DbPassword = "ogx5853rDE3rvujn7z88V*XC8i2Ls2d",
                UsersSaUserName = "sa",
                UsersSaInitial = "SA",
                UsersSaFirstName = "Super",
                UsersSaSurname = "administrator",
                UsersSaSalutation = "Mr",
                UsersSaLanguageOfProgram = "DE",
                UsersSaLanguageDoctorFindings = "DE",
                UsersSaLanguagePatientFindings = "DE",
                UsersSaPassword = "JSqAj%4&JD)2D%Rw(wnVV854(eM_JCP(",
                UsersSaRole = "Superadministrator",
                UsersSaIsActive = "true"
            };
    }
}
