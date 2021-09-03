using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Logic.Services;
using RadioReport.Common.Models;
using RadioReport.Core.PatientManager.Domain.Models;
using VaultSharp;
using VaultSharp.V1.SecretsEngines.Transit;

namespace RadioReport.Core.PatientManager.Domain.Services
{
    public class PatientEncryptionService : VaultEntityEncryptionServiceBase<Patient, PatientEncrypted>
    {
        private readonly IVaultClient _vaultClient;
        private readonly IVaultEncodingService _vaultEncodingService;
        private readonly HttpAuthContext _httpAuthContext;

        public PatientEncryptionService(
            IVaultClient vaultClient,
            IVaultEncodingService vaultEncodingService,
            HttpAuthContext httpAuthContext,
            IOptions<VaultOptions> vaultOptions
        ) : base(vaultOptions)
        {
            if (vaultOptions == null) throw new ArgumentNullException(nameof(vaultOptions));

            _vaultClient = vaultClient;
            _vaultEncodingService = vaultEncodingService;
            _httpAuthContext = httpAuthContext;
        }

        public override async Task<PatientEncrypted> EncryptAsync(Patient decrypted)
        {
            if (decrypted == null) throw new ArgumentNullException(nameof(decrypted));

            var plainText = EncodingHelper.EncodeBase64(new PatientDto(decrypted).AsJson());
            var requestOptions = new EncryptRequestOptions
            {
                Base64EncodedPlainText = plainText
            };
            var response = await ExecuteVaultRequest(() =>
                _vaultClient.V1.Secrets.Transit.EncryptAsync(ConfigurationConsts.VaultSecretsTransitKeyName, requestOptions));
            var cipherText = response?.Data.CipherText;
            var externalIdentifierHash = _vaultEncodingService.HashStringSha256(decrypted.ExternalIdentifier);
            var birthDateHash = _vaultEncodingService.HashDateSha256(decrypted.BirthDate);

            return new PatientEncrypted(decrypted, externalIdentifierHash, birthDateHash, cipherText);
        }

        public override async Task<Patient> DecryptAsync(PatientEncrypted encrypted)
        {
            if (encrypted == null) throw new ArgumentNullException(nameof(encrypted));

            var requestOptions = new DecryptRequestOptions
            {
                CipherText = encrypted.PatientCipher
            };
            var response = await ExecuteVaultRequest(() =>
                _vaultClient.V1.Secrets.Transit.DecryptAsync(ConfigurationConsts.VaultSecretsTransitKeyName, requestOptions));
            var plainText = response.Data.Base64EncodedPlainText;

            var patientDto = EncodingHelper.DecodeBase64(plainText).Deserialize<PatientDto>();
            if (patientDto == null) throw new EncryptionException($"Decryption of patient {encrypted.Id} failed");

            return patientDto.MapToPatient(_httpAuthContext);
        }

        public override async Task<List<PatientEncrypted>> EncryptRangeAsync(IEnumerable<Patient> decrypted)
        {
            if (decrypted == null) throw new ArgumentNullException(nameof(decrypted));

            var decryptedList = decrypted.ToList();
            if (!decryptedList.Any()) return new List<PatientEncrypted>();

            var requestOptions = new EncryptRequestOptions
            {
                BatchedEncryptionItems = decryptedList.Select(p =>
                {
                    var plainText = EncodingHelper.EncodeBase64(new PatientDto(p).AsJson());

                    return new EncryptionItem
                    {
                        Base64EncodedPlainText = plainText
                    };
                }).ToList()
            };

            var response = await ExecuteVaultRequest(() =>
                _vaultClient.V1.Secrets.Transit.EncryptAsync(ConfigurationConsts.VaultSecretsTransitKeyName, requestOptions));
            var result = new List<PatientEncrypted>();
            for (var i = 0; i < response.Data.BatchedResults.Count; i++)
            {
                var patient = decryptedList[i];
                var externalIdentifierHash = _vaultEncodingService.HashStringSha256(patient.ExternalIdentifier);
                var birthDateHash = _vaultEncodingService.HashDateSha256(patient.BirthDate);
                var cipherText = response.Data.BatchedResults[i].CipherText;
                result.Add(new PatientEncrypted(patient, externalIdentifierHash, birthDateHash, cipherText));
            }

            return result;
        }

        public override async Task<List<Patient>> DecryptRangeAsync(IEnumerable<PatientEncrypted> encrypted)
        {
            if (encrypted == null) throw new ArgumentNullException(nameof(encrypted));

            var encryptedList = encrypted.ToList();
            if (!encryptedList.Any()) return new List<Patient>();

            var requestOptions = new DecryptRequestOptions
            {
                BatchedDecryptionItems = encryptedList.Select(e => new DecryptionItem
                {
                    CipherText = e.PatientCipher
                }).ToList()
            };

            var response = await ExecuteVaultRequest(() =>
                _vaultClient.V1.Secrets.Transit.DecryptAsync(ConfigurationConsts.VaultSecretsTransitKeyName, requestOptions));

            return response.Data.BatchedResults
                .Select((result, index) => EncodingHelper.DecodeBase64(result.Base64EncodedPlainText).Deserialize<PatientDto>())
                .Where(d => d != null)
                .Select(d => d.MapToPatient(_httpAuthContext))
                .ToList();
        }
    }
}
