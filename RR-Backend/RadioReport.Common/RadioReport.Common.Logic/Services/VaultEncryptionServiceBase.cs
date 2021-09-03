using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Models;
using VaultSharp.Core;

namespace RadioReport.Common.Logic.Services
{
    public abstract class VaultEncryptionServiceBase : IEncryptionService
    {
        protected VaultEncryptionServiceBase(IOptions<VaultOptions> options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            Options = options.Value;
        }

        protected VaultOptions Options { get; }

        public abstract Task<string> EncryptAsync(int decrypted);
        public abstract Task<string> EncryptAsync(long decrypted);
        public abstract Task<int> DecryptIntAsync(string encrypted);
        public abstract Task<long> DecryptLongAsync(string encrypted);

        protected async Task<TResponse> ExecuteVaultRequest<TResponse>(Func<Task<TResponse>> requestAction)
        {
            if (requestAction == null) throw new ArgumentNullException(nameof(requestAction));

            try
            {
                return await requestAction();
            }
            catch (VaultApiException vaultException)
            {
                throw new VaultRequestFailedException($"Vault request failed. {string.Join(" | ", vaultException.ApiErrors)}", vaultException);
            }
        }
    }
}
