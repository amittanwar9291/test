using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Helpers;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Resources;
using RadioReport.Common.Models;
using RadioReport.Core.LicenseManager.Domain.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Domain.Managers
{
    public class LicenseHttpManager : ILicenseHttpManager
    {
        private readonly ILicenseFractionManager _licenseFractionManager;
        private readonly ILicenseTokenService _licenseTokenService;
        private readonly ILicenseManager _licenseManager;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly IPaginationService _paginationService;
        private readonly ICurrentCreditScoreManager _currentCreditScoreManager;
        private readonly IEncryptionService _encryptionService;
        private readonly IKeyStoreService _keyStoreService;

        public LicenseHttpManager(
            ILicenseFractionManager licenseFractionManager,
            ILicenseTokenService licenseTokenService,
            ILicenseManager licenseManager,
            HttpAuthContext httpAuthContext,
            IPaginationService paginationService,
            ICurrentCreditScoreManager currentCreditScoreManager,
            IEncryptionService encryptionService,
            IKeyStoreService keyStoreService
        )
        {
            _licenseFractionManager = licenseFractionManager;
            _licenseTokenService = licenseTokenService;
            _licenseManager = licenseManager;
            _httpAuthContext = httpAuthContext;
            _paginationService = paginationService;
            _currentCreditScoreManager = currentCreditScoreManager;
            _encryptionService = encryptionService;
            _keyStoreService = keyStoreService;
        }

        public Task<LicenseFraction> GetByIdAsync(Guid id, Expression<Func<LicenseFraction, bool>> predicate = null) =>
            _licenseFractionManager.GetByIdAsync(id, predicate);

        public Task<LicenseFraction> GetByIdAsync(Guid id, string[] includes, Expression<Func<LicenseFraction, bool>> predicate = null) =>
            _licenseFractionManager.GetByIdAsync(id, includes, predicate);

        public Task<List<LicenseFraction>> GetByIdsAsync(List<Guid> ids, Expression<Func<LicenseFraction, bool>> predicate = null) =>
            _licenseFractionManager.GetByIdsAsync(ids, predicate);

        public Task<LicenseFraction> GetAsNoTrackingAsync(Guid id) => _licenseFractionManager.GetAsNoTrackingAsync(id);

        public Task<List<LicenseFraction>> GetAllAsync() => _licenseFractionManager.GetAllAsync();

        public IQueryable<LicenseFraction> GetManyQueryable(Expression<Func<LicenseFraction, bool>> predicate) =>
            _licenseFractionManager.GetManyQueryable(predicate);

        public Task<List<LicenseFraction>> GetManyAsync(Expression<Func<LicenseFraction, bool>> predicate) => _licenseFractionManager.GetManyAsync(predicate);

        public Task<LicenseFraction> GetFirstOrDefaultAsync(Expression<Func<LicenseFraction, bool>> predicate, string[] includes = null) =>
            _licenseFractionManager.GetFirstOrDefaultAsync(predicate, includes);

        public Task<LicenseFraction> GetSingleAsync(Expression<Func<LicenseFraction, bool>> predicate, string[] includes = null) =>
            _licenseFractionManager.GetSingleAsync(predicate, includes);

        public Task<LicenseFraction> GetSingleOrDefaultAsync(Expression<Func<LicenseFraction, bool>> predicate) =>
            _licenseFractionManager.GetSingleOrDefaultAsync(predicate);

        public Task<bool> AnyAsync(Guid id) => _licenseFractionManager.AnyAsync(id);

        public Task<bool> AnyAsync(Expression<Func<LicenseFraction, bool>> predicate) => _licenseFractionManager.AnyAsync(predicate);

        public Task<LicenseFraction> AddAsync(LicenseFraction model, bool keepId = false) => _licenseFractionManager.AddAsync(model, keepId);

        public Task AddRangeAsync(IEnumerable<LicenseFraction> models) => _licenseFractionManager.AddRangeAsync(models);

        public Task<LicenseFraction> UpdateAsync(LicenseFraction model) => _licenseFractionManager.UpdateAsync(model);

        public Task UpdateByPropertiesAsync(LicenseFraction model, IEnumerable<string> properties) =>
            _licenseFractionManager.UpdateByPropertiesAsync(model, properties);

        public Task RemoveAsync(Guid id) => _licenseFractionManager.RemoveAsync(id);

        public Task RemoveAllAsync() => _licenseFractionManager.RemoveAllAsync();

        public Task<int> CountAsync(Expression<Func<LicenseFraction, bool>> predicate) => _licenseFractionManager.CountAsync(predicate);

        public Task<bool> IsAlive() => _licenseFractionManager.IsAlive();

        public async Task UploadLicenseFile(IFormFile file)
        {
            if (file == null) throw new ArgumentNullException(nameof(file));

            await _licenseTokenService.UploadLicenseFile(file);
        }

        public async Task<List<LicenseListItem>> GetLicenses() =>
            (await _licenseManager.GetManyAsync(l => l.InstituteId == _httpAuthContext.InstituteId))
            .OrderBy(l => l.Order)
            .Select(license =>
            {
                var creditVolume = license.GetTokenLicense(_keyStoreService).CreditVolume;

                return new LicenseListItem
                {
                    LicenseId = license.Id,
                    CreationDate = license.CreationDate,
                    ExpirationDate = license.ExpirationDate,
                    CreditVolume = creditVolume,
                    IsActive = license.IsActive,
                    LicensingType = license.LicensingType,
                    Order = license.Order
                };
            })
            .ToList();

        public async Task<LicenseFractionListResponse> GetLicenseFractions(GetLicenseFractionsRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            SetPaginationOptionDefaults(request.PaginationOptions, ConfigurationConsts.LicenseListDefaultPageSize);

            request.PaginationOptions.Total = await _licenseFractionManager.CountAsync(f => f.License.Id == request.LicenseId);
            request.PaginationOptions.PageCount = _paginationService.GetPageCount(request.PaginationOptions);
            var pageSize = request.PaginationOptions.PageSize ?? throw new InvalidOperationException();
            var skipCount = _paginationService.GetSkipCount(request.PaginationOptions, pageSize);

            var licenseFractions = await _licenseFractionManager
                .GetManyQueryable(f => f.License.Id == request.LicenseId)
                .OrderBy(f => f.Order)
                .Skip(skipCount)
                .Take(pageSize)
                .ToListAsync();
            var dtos = licenseFractions.Select(f => JwtTokenHelper.ReadJwtToken(f.Token).GetSerialized<LicenseDto>(JwtPayloadKey.License).LastLicenseFraction);

            var response = new LicenseFractionListResponse
            {
                PaginationOptions = request.PaginationOptions
            };
            response.LicenseFractions.AddRange(dtos);

            return response;
        }

        public async Task<CurrentCreditScore> GetCurrentCreditScore()
        {
            var creditScore = await _currentCreditScoreManager.GetActiveByInstituteId();
            if (creditScore == null)
                throw new CurrentCreditScoreNotFoundException($"Current credit score not found. InstituteId: {_httpAuthContext.InstituteId}")
                    .WithReason(ErrorMessageResources.CurrentCreditScoreNotAvailable);

            return creditScore;
        }

        public async Task<LicenseDetails> GetLicenseDetails(Guid licenseId)
        {
            var license = await _licenseManager.GetByIdAsync(licenseId);
            if (license == null)
                throw new LicenseNotFoundException($"License with id {licenseId} not found").WithReason(
                    ErrorMessageResources.LicenseDetailsNotAvailable);

            var currentCreditScore = await _currentCreditScoreManager.GetByLicenseId(licenseId);
            if (currentCreditScore == null)
                throw new CurrentCreditScoreNotFoundException($"Current credit score not found. InstituteId: {_httpAuthContext.InstituteId}").WithReason(
                    ErrorMessageResources.LicenseDetailsNotAvailable);

            var tokenLicense = license.GetTokenLicense(_keyStoreService);
            var currentScore = await currentCreditScore.GetScoreAsync(_encryptionService);
            var depletionPercentage = (double) currentScore / tokenLicense.CreditVolume * 100;

            return new LicenseDetails
            {
                CreationDate = license.CreationDate,
                ExpirationDate = license.ExpirationDate,
                CreditVolume = tokenLicense.CreditVolume,
                CurrentCredit = currentScore,
                IsActive = license.IsActive,
                LicensingType = license.LicensingType,
                DepletionPercentage = depletionPercentage
            };
        }

        private static void SetPaginationOptionDefaults(PaginationOptions options, int defaultPageSize)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            options.Total ??= 0;
            options.CurrentPage = options.CurrentPage > 0 ? options.CurrentPage : 1;
            options.PageCount = options.PageCount > 0 ? options.PageCount : 1;
            options.PageSize ??= defaultPageSize;
        }
    }
}
