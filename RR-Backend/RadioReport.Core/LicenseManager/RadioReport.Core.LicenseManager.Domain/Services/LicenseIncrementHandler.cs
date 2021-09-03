using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums.Models;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Models;
using RadioReport.Core.LicenseManager.Domain.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Domain.Services
{
    public class LicenseIncrementHandler : ILicenseIncrementHandler
    {
        private readonly ILicenseManager _licenseManager;
        private readonly ICurrentCreditScoreManager _currentCreditScoreManager;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly ILicenseTokenService _licenseTokenService;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly IKeyStoreService _keyStoreService;
        private readonly IEncryptionService _encryptionService;
        private readonly ICacheService _cacheService;
        private readonly ILogger<LicenseIncrementHandler> _logger;
        private readonly LicenseOptions _licenseOptions;

        public LicenseIncrementHandler(ILicenseManager licenseManager,
            ICurrentCreditScoreManager currentCreditScoreManager,
            HttpAuthContext httpAuthContext,
            ILicenseTokenService licenseTokenService,
            IKafkaProducer kafkaProducer,
            IOptions<LicenseOptions> licenseOptions,
            IKeyStoreService keyStoreService,
            IEncryptionService encryptionService,
            ICacheService cacheService,
            ILogger<LicenseIncrementHandler> logger
        )
        {
            if (licenseOptions == null) throw new ArgumentNullException(nameof(licenseOptions));

            _licenseManager = licenseManager;
            _currentCreditScoreManager = currentCreditScoreManager;
            _httpAuthContext = httpAuthContext;
            _licenseTokenService = licenseTokenService;
            _kafkaProducer = kafkaProducer;
            _keyStoreService = keyStoreService;
            _encryptionService = encryptionService;
            _cacheService = cacheService;
            _logger = logger;
            _licenseOptions = licenseOptions.Value;
        }

        public async Task HandleLicenseIncrement(LicenseIncrementSyncRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            var isIncrementFinished = false;
            var newLicenseRequested = false;
            while (!isIncrementFinished)
            {
                var response = new LicenseIncrementSyncResponse();

                try
                {
                    var license = await _licenseManager.GetActiveByInstituteId();
                    if (license == null || license.IsExpired && !license.IsOffline)
                    {
                        await (await RequestNewLicense())
                            .OnExceptionLog(_logger)
                            .OnSuccess(async () => license = await _licenseManager.GetActiveByInstituteId());

                        newLicenseRequested = true;
                        if (license == null) throw new LicenseNotFoundException($"No active license for institute {_httpAuthContext.InstituteId} available");
                    }

                    var currentCreditScore = await _currentCreditScoreManager.GetActiveByInstituteId() ??
                                             throw new CurrentCreditScoreNotFoundException(
                                                 $"Current credit score for institute {_httpAuthContext.InstituteId} not found");

                    var incrementResult = await CreateLicenseIncrementResult(license, currentCreditScore, request.LicenseParams);
                    if (!incrementResult.AreExpirationAndScoreValid && !newLicenseRequested && !license.IsOffline)
                    {
                        await (await RequestNewLicense())
                            .OnExceptionLog(_logger)
                            .OnSuccess(async () =>
                            {
                                license = await _licenseManager.GetActiveByInstituteId() ??
                                          throw new InconsistentStateException("No license found after successful license request");

                                currentCreditScore = await _currentCreditScoreManager.GetActiveByInstituteId() ??
                                                     throw new InconsistentStateException("No credit score found after successful license request");

                                incrementResult = await CreateLicenseIncrementResult(license, currentCreditScore, request.LicenseParams);
                            });
                    }

                    response.IncrementResult = incrementResult;
                    response.LicenseFractionId = license.LastLicenseFraction.Id;
                    response.IsSuccess = true;
                    await _cacheService.Set(request.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
                    if (incrementResult.IsSuccess)
                    {
                        if (incrementResult.IsInOverdraft || incrementResult.IsInGracePeriod)
                        {
                            await currentCreditScore.IncrementOverdraftAsync(_encryptionService);
                        }
                        await currentCreditScore.IncrementScoreAsync(_encryptionService);
                        currentCreditScore.LastModifiedDate = DateTime.Now.ToUniversalTime();
                        await _currentCreditScoreManager.UpdateAsync(currentCreditScore);
                    }

                    isIncrementFinished = true;
                }
                catch (DbUpdateConcurrencyException concurrencyException)
                {
                    _logger.LogError(concurrencyException, "Concurrency exception during license increment operation. {InstituteId}",
                        _httpAuthContext.InstituteId);
                }
            }
        }

        private async Task<LicenseIncrementResult> CreateLicenseIncrementResult(License license, CurrentCreditScore currentCreditScore,
            TextGenerationLicenseParams licenseParams)
        {
            var tokenLicense = license.GetTokenLicense(_keyStoreService);
            var tokenLastFraction = tokenLicense.LastLicenseFraction;
            var lastFractionCreditScore = tokenLastFraction.CreditScore;
            var expirationType = tokenLicense.GetExpirationType(_licenseOptions);
            var currentScore = await currentCreditScore.GetScoreAsync(_encryptionService);
            var hasCredit = currentScore < lastFractionCreditScore;
            var overdraftBudget =
                (int) Math.Round(Math.Min(tokenLicense.CreditVolume / 100.0 * _licenseOptions.OverdraftPercentage, _licenseOptions.OverdraftCap));
            var hasOverdraftCredit = currentScore < lastFractionCreditScore + overdraftBudget;
            var scoreType = !hasCredit ? !hasOverdraftCredit ? LicenseScoreType.Exhausted : LicenseScoreType.InOverdraft : LicenseScoreType.Valid;
            var areParamsLicensed = tokenLicense.AreGenerationParamsLicensed(licenseParams);

            return new LicenseIncrementResult(expirationType, scoreType, areParamsLicensed);
        }

        private async Task<Result> RequestNewLicense()
        {
            try
            {
                var institute = await GetInstitute();
                if (institute.ConnectionType == ConnectionType.Offline)
                    throw new InvalidOperationException($"Offline institute {institute.Id} cannot request online license");

                using var httpClient = new HttpClient();
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", institute.ApiKey);

                var response = await httpClient.PostAsync(_licenseOptions.AutoLicenseUrl, null);
                if (!response.IsSuccessStatusCode)
                {
                    throw new OnlineLicenseRequestFailedException(
                        $"Requesting new license failed. Status: {(int) response.StatusCode}. Reason: {response.ReasonPhrase}");
                }

                var jwtTokenString = await response.Content.ReadAsStringAsync();
                await _licenseTokenService.ValidateAndAddLicense(jwtTokenString);

                return Result.Success();
            }
            catch (Exception exception)
            {
                return exception;
            }
        }

        private async Task<Institute> GetInstitute()
        {
            var request = new GetInstituteSyncRequest
            {
                InstituteId = _httpAuthContext.InstituteId,
                Level = InstituteDetailLevel.InstituteOnly
            };
            var response = await _kafkaProducer.SendSynchronousRequest<GetInstituteSyncResponse>(request, _httpAuthContext);
            if (!response.IsSuccess) throw new InstituteNotFoundException(_httpAuthContext.InstituteId);

            return response.Institute;
        }
    }
}
