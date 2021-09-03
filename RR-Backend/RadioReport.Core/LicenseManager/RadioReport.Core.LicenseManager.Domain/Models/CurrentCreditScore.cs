using System;
using System.Threading.Tasks;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Core.LicenseManager.Domain.Models
{
    public class CurrentCreditScore : ModelBase
    {
        public CurrentCreditScore()
        {
        }

        public CurrentCreditScore(LicenseFraction licenseFraction, string scoreCipher, string overdraftCipher)
        {
            if (licenseFraction == null) throw new ArgumentNullException(nameof(licenseFraction));
            if (licenseFraction.InstituteId.IsEmpty()) throw new InvalidOperationException("Missing institute id");
            if (licenseFraction.License == null) throw new InvalidOperationException("Missing license");

            LicenseId = licenseFraction.License.Id;
            InstituteId = licenseFraction.InstituteId;
            IsActive = true;
            ScoreCipher = scoreCipher;
            OverdraftCipher = overdraftCipher;
            LastModifiedDate = DateTime.Now.ToUniversalTime();
        }

        public Guid LicenseId { get; set; }
        public Guid InstituteId { get; set; }
        public string ScoreCipher { get; set; }
        public string OverdraftCipher { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public bool IsActive { get; set; }

        public async Task IncrementScoreAsync(IEncryptionService encryptionService)
        {
            if (encryptionService == null) throw new ArgumentNullException(nameof(encryptionService));

            var score = await GetScoreAsync(encryptionService);
            ScoreCipher = await encryptionService.EncryptAsync(score + 1);
        }

        public async Task<long> GetScoreAsync(IEncryptionService encryptionService)
        {
            if (encryptionService == null) throw new ArgumentNullException(nameof(encryptionService));

            return await encryptionService.DecryptLongAsync(ScoreCipher);
        }

        public async Task IncrementOverdraftAsync(IEncryptionService encryptionService)
        {
            if (encryptionService == null) throw new ArgumentNullException(nameof(encryptionService));

            var overdraft = await GetOverdraftAsync(encryptionService);
            OverdraftCipher = await encryptionService.EncryptAsync(overdraft + 1);
        }

        public async Task<long> GetOverdraftAsync(IEncryptionService encryptionService)
        {
            if (encryptionService == null) throw new ArgumentNullException(nameof(encryptionService));

            return await encryptionService.DecryptIntAsync(OverdraftCipher);
        }
    }
}
