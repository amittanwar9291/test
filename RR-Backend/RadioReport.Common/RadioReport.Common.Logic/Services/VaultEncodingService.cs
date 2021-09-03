using System;
using System.Globalization;
using Microsoft.Extensions.Options;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Services
{
    public class VaultEncodingService : IVaultEncodingService
    {
        private readonly IOptions<VaultOptions> _vaultOptions;

        public VaultEncodingService(IOptions<VaultOptions> vaultOptions)
        {
            _vaultOptions = vaultOptions;
        }

        public string HashStringSha256(string str) => EncodingHelper.HashSha256(str, _vaultOptions.Value.HashSalt);

        public string HashDateSha256(DateTime dateTime) =>
            EncodingHelper.HashSha256(dateTime.Date.ToString(CultureInfo.InvariantCulture), _vaultOptions.Value.HashSalt);
    }
}
