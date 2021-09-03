using System;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Helpers;
using RadioReport.Common.Enums.Models;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Models;
using RadioReport.Core.LicenseManager.Domain.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Domain.Services
{
    public class LicenseTokenService : ILicenseTokenService
    {
        private readonly IKeyStoreService _keyStoreService;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly ILicenseFractionManager _licenseFractionManager;
        private readonly ICurrentCreditScoreManager _currentCreditScoreManager;
        private readonly ILicenseManager _licenseManager;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly IEncryptionService _encryptionService;

        public LicenseTokenService(
            IKeyStoreService keyStoreService,
            HttpAuthContext httpAuthContext,
            ILicenseFractionManager licenseFractionManager,
            ICurrentCreditScoreManager currentCreditScoreManager,
            ILicenseManager licenseManager,
            IKafkaProducer kafkaProducer,
            IEncryptionService encryptionService
        )
        {
            _keyStoreService = keyStoreService;
            _httpAuthContext = httpAuthContext;
            _licenseFractionManager = licenseFractionManager;
            _currentCreditScoreManager = currentCreditScoreManager;
            _licenseManager = licenseManager;
            _kafkaProducer = kafkaProducer;
            _encryptionService = encryptionService;
        }

        public async Task UploadLicenseFile(IFormFile file)
        {
            if (file == null) throw new ArgumentNullException(nameof(file));

            (await ValidateConnectionType())
                .OnException(exception => throw exception)
                .OnFailureThrow<InvalidOperationException>("License file upload not allowed for online installations");

            ValidateLicenseFile(file)
                .OnFailureThrow<InvalidLicenseFileException>("Invalid license file format");

            var jwtTokenString = await ReadLicenseFile(file);
            await ValidateAndAddLicense(jwtTokenString);
        }

        public async Task ValidateAndAddLicense(string jwtTokenString)
        {
            var jwtToken = ReadJwtToken(jwtTokenString);
            ValidateJwtTokenPayload(jwtToken)
                .OnFailureThrow<InvalidLicenseTokenException>("Invalid license token, missing payload entries");

            jwtToken = JwtTokenHelper.ValidateRsaSignedJwtToken(jwtTokenString, _keyStoreService);

            var newLicenseDto = jwtToken.GetSerialized<LicenseDto>(JwtPayloadKey.License);
            var newFractionDto = newLicenseDto.LastLicenseFraction;
            ValidateInstituteId(newLicenseDto.InstituteId)
                .OnFailureThrow<UnauthorizedAccessException>();

            (await ValidateLicenseFractionId(newFractionDto.Id))
                .OnFailureThrow<LicenseFractionAlreadyUploadedException>($"License fraction {newFractionDto.Id} already uploaded");

            ValidateExpirationDate(newFractionDto.ExpirationDate)
                .OnFailureThrow<InvalidLicenseTokenException>("Invalid license token, expiration date already passed");

            var existingLicense = await _licenseManager.GetByIdAsync(newLicenseDto.Id, new[] { nameof(License.LicenseFractions) });
            if (existingLicense == null)
            {
                await AddLicense(newLicenseDto, newFractionDto, jwtTokenString);
            }
            else
            {
                var lastFractionDto = JwtTokenHelper.ValidateRsaSignedJwtToken(existingLicense.Token, _keyStoreService)
                    .GetSerialized<LicenseDto>(JwtPayloadKey.License)
                    .LastLicenseFraction;
                await UpdateLicense(existingLicense, newLicenseDto, jwtTokenString);
                await AddLicenseFraction(existingLicense, newFractionDto, lastFractionDto, jwtTokenString);
            }
        }

        private static async Task<string> ReadLicenseFile(IFormFile file)
        {
            await using var stream = file.OpenReadStream();
            using var streamReader = new StreamReader(stream);

            return await streamReader.ReadToEndAsync();
        }

        private static JwtSecurityToken ReadJwtToken(string jwtTokenString) => new JwtSecurityTokenHandler().ReadJwtToken(jwtTokenString);

        private static Result ValidateJwtTokenPayload(JwtSecurityToken token)
        {
            return !ContainsKeys(JwtPayloadKey.License, JwtPayloadKey.KeyId) || HasInvalidKeyId() ? Result.Fail() : Result.Success();

            bool ContainsKeys(params string[] keys) => keys.All(token.Payload.ContainsKey);
            bool HasInvalidKeyId() => !token.TryGetGuid(JwtPayloadKey.KeyId, out var id) || id.IsEmpty();
        }

        private async Task<Result> ValidateConnectionType()
        {
            var request = new GetInstituteSyncRequest
            {
                InstituteId = _httpAuthContext.InstituteId,
                Level = InstituteDetailLevel.InstituteOnly
            };
            var response = await _kafkaProducer.SendSynchronousRequest<GetInstituteSyncResponse>(request, _httpAuthContext);
            if (!response.IsSuccess) return new InstituteNotFoundException(_httpAuthContext.InstituteId);

            return response.Institute.ConnectionType == ConnectionType.Offline ? Result.Success() : Result.Fail();
        }

        private static Result ValidateLicenseFile(IFormFile file)
        {
            var fileExtension = GetFileExtension(file.FileName);

            return file.ContentType != MediaTypeNames.Application.Octet || fileExtension.ToUpperInvariant() != "RRL" ? Result.Fail() : Result.Success();
        }

        private Result ValidateInstituteId(Guid instituteId) => instituteId != _httpAuthContext.InstituteId ? Result.Fail() : Result.Success();

        private async Task AddLicense(LicenseDto licenseDto, LicenseFractionDto licenseFractionDto, string jwtTokenString)
        {
            var license = new License(licenseDto, jwtTokenString);
            var licenseFraction = new LicenseFraction(licenseFractionDto, license, jwtTokenString);
            license.LicenseFractions.Add(licenseFraction);

            var scoreCipher = await _encryptionService.EncryptAsync(0L);
            var overdraftCipher = await _encryptionService.EncryptAsync(0);
            var newCurrentCreditScore = new CurrentCreditScore(licenseFraction, scoreCipher, overdraftCipher);

            var currentCreditScore = await _currentCreditScoreManager.GetActiveByInstituteId();
            if (currentCreditScore != null)
            {
                var overdraftCurrent = await _encryptionService.DecryptIntAsync(currentCreditScore.OverdraftCipher);
                if (overdraftCurrent > 0)
                {
                    newCurrentCreditScore.ScoreCipher = await _encryptionService.EncryptAsync((long) overdraftCurrent);
                }
            }

            await DeactivateCurrentActives();
            await _currentCreditScoreManager.AddAsync(newCurrentCreditScore);
            await _licenseManager.AddAsync(license, true);
        }

        private async Task DeactivateCurrentActives()
        {
            var activeLicense = await _licenseManager.GetActiveByInstituteId();
            if (activeLicense != null)
            {
                activeLicense.IsActive = false;
                await _licenseManager.UpdateAsync(activeLicense);
            }

            var currentCreditScore = await _currentCreditScoreManager.GetActiveByInstituteId();
            if (currentCreditScore != null)
            {
                currentCreditScore.IsActive = false;
                await _currentCreditScoreManager.UpdateAsync(currentCreditScore);
            }
        }

        private async Task UpdateLicense(License existingLicense, LicenseDto licenseDto, string jwtTokenString)
        {
            if (!existingLicense.IsActive) throw new InvalidOperationException("Updated license must be active");

            existingLicense.Token = jwtTokenString;
            existingLicense.LicensingType = licenseDto.LicensingType;
            await _licenseManager.UpdateAsync(existingLicense);
        }

        private async Task AddLicenseFraction(License existingLicense, LicenseFractionDto newFractionDto, LicenseFractionDto lastFractionDto,
            string jwtTokenString)
        {
            ValidateCreditScore(newFractionDto, lastFractionDto)
                .OnFailureThrow<InvalidLicenseTokenException>("Invalid license token. New credit score is lower than last one");

            var newFraction = new LicenseFraction(newFractionDto, existingLicense, jwtTokenString)
            {
                Order = existingLicense.LastLicenseFraction.Order + 1
            };
            existingLicense.LicenseFractions.Add(newFraction);
            await _licenseFractionManager.AddAsync(newFraction, true);
            await _licenseManager.UpdateAsync(existingLicense);
            await UpdateCurrentCreditScore(existingLicense.Id, lastFractionDto, newFractionDto);
        }

        private async Task<Result> ValidateLicenseFractionId(Guid licenseFractionId) =>
            await _licenseFractionManager.AnyAsync(licenseFractionId) ? Result.Fail() : Result.Success();

        private static Result ValidateCreditScore(LicenseFractionDto newFraction, LicenseFractionDto lastFraction) =>
            newFraction.CreditScore > lastFraction.CreditScore ? Result.Success() : Result.Fail();

        private static Result ValidateExpirationDate(DateTime expirationDate) => expirationDate > DateTime.Now ? Result.Success() : Result.Fail();

        private static string GetFileExtension(string fileName)
        {
            var dotIndex = fileName.LastIndexOf(".", StringComparison.InvariantCulture);

            return dotIndex < 0 || dotIndex == fileName.Length - 1 ? string.Empty : fileName.Substring(dotIndex + 1);
        }

        private async Task UpdateCurrentCreditScore(Guid licenseId, LicenseFractionDto lastFraction, LicenseFractionDto newFraction)
        {
            var currentCreditScore = await _currentCreditScoreManager.GetActiveByLicenseId(licenseId);
            if (currentCreditScore == null || currentCreditScore.InstituteId != _httpAuthContext.InstituteId)
                throw new InvalidOperationException(
                    $"Inconsistent state when trying to update current credit score. Institute id: {_httpAuthContext.InstituteId}");

            var currentOverdraft = await currentCreditScore.GetOverdraftAsync(_encryptionService);
            var addedFractionScore = (int) (newFraction.CreditScore - lastFraction.CreditScore);
            var newOverdraft = Math.Max(currentOverdraft - addedFractionScore, 0);
            if (newOverdraft != currentOverdraft)
            {
                currentCreditScore.OverdraftCipher = await _encryptionService.EncryptAsync(newOverdraft);
                currentCreditScore.LastModifiedDate = DateTime.Now.ToUniversalTime();
                await _currentCreditScoreManager.UpdateAsync(currentCreditScore);
            }
        }
    }
}
