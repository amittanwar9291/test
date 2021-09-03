using System;
using RadioReport.Common.Models;
using VaultSharp;
using VaultSharp.V1.AuthMethods.LDAP;

namespace RadioReport.Common.API.Helpers
{
    public static class VaultHelper
    {
        public static IVaultClient CreateClient(VaultOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            var authMethod = new LDAPAuthMethodInfo(options.UserName, options.Password);
            var settings = new VaultClientSettings(options.ServerAddress, authMethod)
            {
                ContinueAsyncTasksOnCapturedContext = false,
                UseVaultTokenHeaderInsteadOfAuthorizationHeader = true
            };
            var vaultClient = new VaultClient(settings);
            if (!options.IsMocked)
            {
                vaultClient.V1.Auth.PerformImmediateLogin();
            }

            return vaultClient;
        }
    }
}
