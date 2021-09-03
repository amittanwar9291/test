using System;
using System.Linq;
using Microsoft.Extensions.Configuration;
using RadioReport.Common.API.Services;
using RadioReport.Common.Models;

namespace RadioReport.Common.API.Extensions
{
    public static class ConfigurationBuilderExtensions
    {
        public static IConfigurationBuilder AddVaultConfiguration(this IConfigurationBuilder builder, IConfiguration configuration)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            if (configuration == null) throw new ArgumentNullException(nameof(configuration));

            var vaultOptions = new VaultOptions
            {
                IsMocked = bool.TryParse(configuration["Vault:IsMocked"], out var isMocked) && isMocked,
                IsConfigMocked = bool.TryParse(configuration["Vault:IsConfigMocked"], out var isConfigMocked) && isConfigMocked,
                IsVaultConfigOverride = bool.TryParse(configuration["Vault:IsVaultConfigOverride"], out var isVaultConfigOverride) && isVaultConfigOverride,
                ServerAddress = configuration["Vault:ServerAddress"],
                UserName = configuration["Vault:UserName"],
                Password = configuration["Vault:Password"],
            };
            builder.Add(new VaultConfigurationSource(vaultOptions));
            if (vaultOptions.IsVaultConfigOverride) return builder;

            builder.Sources.Insert(2, builder.Sources.Last());
            builder.Sources.RemoveAt(builder.Sources.Count - 1);

            return builder;
        }
    }
}
