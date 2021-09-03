using Microsoft.Extensions.Configuration;
using RadioReport.Common.Models;

namespace RadioReport.Common.API.Services
{
    public class VaultConfigurationSource : IConfigurationSource
    {
        private readonly VaultOptions _options;

        public VaultConfigurationSource(VaultOptions options)
        {
            _options = options;
        }

        public IConfigurationProvider Build(IConfigurationBuilder builder) => new VaultConfigurationProvider(_options);
    }
}
