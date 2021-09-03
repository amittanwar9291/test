using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using VaultSharp.Core;

namespace RadioReport.Common.Logic.Services
{
    public abstract class VaultEntityEncryptionServiceBase<TDecrypted, TEncrypted> : IEntityEncryptionService<TDecrypted, TEncrypted>
        where TEncrypted : ModelBase
    {
        protected VaultEntityEncryptionServiceBase(IOptions<VaultOptions> options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            Options = options.Value;
        }
        
        protected VaultOptions Options { get; }

        public abstract Task<TEncrypted> EncryptAsync(TDecrypted decrypted);
        public abstract Task<TDecrypted> DecryptAsync(TEncrypted encrypted);
        public abstract Task<List<TEncrypted>> EncryptRangeAsync(IEnumerable<TDecrypted> decrypted);
        public abstract Task<List<TDecrypted>> DecryptRangeAsync(IEnumerable<TEncrypted> encrypted);

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
