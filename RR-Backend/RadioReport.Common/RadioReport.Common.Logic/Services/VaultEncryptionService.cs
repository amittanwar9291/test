using System.Globalization;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Models;
using VaultSharp;
using VaultSharp.V1.SecretsEngines.Transit;

namespace RadioReport.Common.Logic.Services
{
    public class VaultEncryptionService : VaultEncryptionServiceBase
    {
        private readonly IVaultClient _vaultClient;

        public VaultEncryptionService(IOptions<VaultOptions> options, IVaultClient vaultClient) : base(options)
        {
            _vaultClient = vaultClient;
        }

        public override async Task<string> EncryptAsync(int decrypted) => await EncryptInternalAsync(decrypted.ToString(CultureInfo.InvariantCulture));

        public override async Task<string> EncryptAsync(long decrypted) => await EncryptInternalAsync(decrypted.ToString(CultureInfo.InvariantCulture));

        public override async Task<int> DecryptIntAsync(string encrypted)
        {
            var decodedPlainText = await DecryptInternalAsync(encrypted);
            if (!int.TryParse(decodedPlainText, out var decrypted)) throw new EncryptionException("Encrypted data wasn't of type int");

            return decrypted;
        }

        public override async Task<long> DecryptLongAsync(string encrypted)
        {
            var decodedPlainText = await DecryptInternalAsync(encrypted);
            if (!long.TryParse(decodedPlainText, out var decrypted)) throw new EncryptionException("Encrypted data wasn't of type long");

            return decrypted;
        }

        private async Task<string> EncryptInternalAsync(string toString)
        {
            var plainText = EncodingHelper.EncodeBase64(toString);
            var requestOptions = new EncryptRequestOptions
            {
                Base64EncodedPlainText = plainText
            };
            var response = await ExecuteVaultRequest(() =>
                _vaultClient.V1.Secrets.Transit.EncryptAsync(ConfigurationConsts.VaultSecretsTransitKeyName, requestOptions));

            return response.Data.CipherText;
        }

        private async Task<string> DecryptInternalAsync(string encrypted)
        {
            var requestOptions = new DecryptRequestOptions
            {
                CipherText = encrypted
            };
            var response = await ExecuteVaultRequest(() =>
                _vaultClient.V1.Secrets.Transit.DecryptAsync(ConfigurationConsts.VaultSecretsTransitKeyName, requestOptions));

            return EncodingHelper.DecodeBase64(response.Data.Base64EncodedPlainText);
        }
    }
}
