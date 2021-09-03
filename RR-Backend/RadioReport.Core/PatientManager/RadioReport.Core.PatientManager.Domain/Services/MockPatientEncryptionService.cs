using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Logic.Services;
using RadioReport.Common.Models;
using RadioReport.Core.PatientManager.Domain.Models;

namespace RadioReport.Core.PatientManager.Domain.Services
{
    public class MockPatientEncryptionService : VaultEntityEncryptionServiceBase<Patient, PatientEncrypted>
    {
        private readonly IVaultEncodingService _vaultEncodingService;
        private readonly HttpAuthContext _httpAuthContext;

        public MockPatientEncryptionService(
            IVaultEncodingService vaultEncodingService,
            HttpAuthContext httpAuthContext,
            IOptions<VaultOptions> vaultOptions
        ) : base(vaultOptions)
        {
            _vaultEncodingService = vaultEncodingService;
            _httpAuthContext = httpAuthContext;
        }

        public override Task<PatientEncrypted> EncryptAsync(Patient decrypted)
        {
            if (decrypted == null) throw new ArgumentNullException(nameof(decrypted));

            return Task.FromResult(EncryptPatient(decrypted));
        }

        public override Task<Patient> DecryptAsync(PatientEncrypted encrypted)
        {
            if (encrypted == null) throw new ArgumentNullException(nameof(encrypted));

            return Task.FromResult(DecryptPatient(encrypted));
        }

        public override Task<List<PatientEncrypted>> EncryptRangeAsync(IEnumerable<Patient> decrypted)
        {
            if (decrypted == null) throw new ArgumentNullException(nameof(decrypted));

            return Task.FromResult(decrypted.Select(EncryptPatient).ToList());
        }

        public override Task<List<Patient>> DecryptRangeAsync(IEnumerable<PatientEncrypted> encrypted)
        {
            if (encrypted == null) throw new ArgumentNullException(nameof(encrypted));

            return Task.FromResult(encrypted
                .Select(e => e.PatientCipher.Deserialize<PatientDto>())
                .Where(d => d != null)
                .Select(d => d.MapToPatient(_httpAuthContext))
                .ToList());
        }

        private PatientEncrypted EncryptPatient(Patient decrypted)
        {
            if (decrypted == null) throw new ArgumentNullException(nameof(decrypted));

            var externalIdentifierHash = _vaultEncodingService.HashStringSha256(decrypted.ExternalIdentifier);
            var birthDateHash = _vaultEncodingService.HashDateSha256(decrypted.BirthDate);
            var cipherMock = new PatientDto(decrypted).AsJson();

            return new PatientEncrypted(decrypted, externalIdentifierHash, birthDateHash, cipherMock);
        }

        private Patient DecryptPatient(PatientEncrypted encrypted)
        {
            if (encrypted == null) throw new ArgumentNullException(nameof(encrypted));

            var patientDto = encrypted.PatientCipher.Deserialize<PatientDto>();
            if (patientDto == null) throw new EncryptionException($"Decryption of patient {encrypted.Id} failed");

            return patientDto.MapToPatient(_httpAuthContext);
        }
    }
}
