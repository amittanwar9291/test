using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Models;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Models;
using RadioReport.Core.InstituteManager.Domain.Models.InstituteList;

namespace RadioReport.Core.InstituteManager.Domain.Managers
{
    public class InstituteHttpManager : IInstituteHttpManager
    {
        private readonly IInstituteManager _instituteManager;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly JwtSecurityTokenHandler _jwtTokenHandler;
        private readonly IInstituteLogoService _instituteLogoService;
        private readonly IInstituteService _instituteService;
        private readonly IHtmlTemplateService _htmlTemplateService;

        public InstituteHttpManager(
            IInstituteManager instituteManager,
            HttpAuthContext httpAuthContext,
            IHtmlTemplateService htmlTemplateService,
            IInstituteLogoService instituteLogoService,
            IInstituteService instituteService)
        {
            _instituteManager = instituteManager;
            _httpAuthContext = httpAuthContext;
            _jwtTokenHandler = new JwtSecurityTokenHandler();
            _htmlTemplateService = htmlTemplateService;
            _instituteLogoService = instituteLogoService;
            _instituteService = instituteService;
        }

        public async Task<RequestResponse> GetInstituteToken()
        {
            var institute = await _instituteManager.GetByIdAsync(_httpAuthContext.InstituteId);
            if (institute == null)
            {
                throw new InstituteNotFoundException(_httpAuthContext.InstituteId);
            }

            return RequestResponse.Success(institute.InstituteToken);
        }

        public async Task<RequestResponse> UpdateInstituteToken()
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AuthConst.JwtSecret));
            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512Signature);
            var institute = await _instituteManager.GetByIdAsync(_httpAuthContext.InstituteId);
            if (institute == null)
            {
                throw new InstituteNotFoundException(_httpAuthContext.InstituteId);
            }

            var instituteToken = new JwtSecurityToken(claims: null, expires: DateTime.Now.AddYears(10), signingCredentials: signingCredentials)
            {
                Payload =
                {
                    [JwtPayloadKey.InstituteId] = institute.Id,
                    [JwtPayloadKey.TokenId] = Guid.NewGuid(),
                    [JwtPayloadKey.Application] = _httpAuthContext.Application,
                    [JwtPayloadKey.DuplicateExternalIdentifierAllowed] = institute.DuplicateExternalIdentifierAllowed
                }
            };
            institute.InstituteToken = _jwtTokenHandler.WriteToken(instituteToken);
            await _instituteManager.UpdateAsync(institute);

            return RequestResponse.Success();
        }

        public async Task<RequestResponse> UpdateDuplicateMultiExternalIdentifierAllowed(bool duplicateMultiExternalIdentifierAllowed)
        {
            var institute = await _instituteManager.GetByIdAsync(_httpAuthContext.InstituteId);
            if (institute == null)
            {
                throw new InstituteNotFoundException(_httpAuthContext.InstituteId);
            }
            institute.DuplicateExternalIdentifierAllowed = duplicateMultiExternalIdentifierAllowed;
            await _instituteManager.UpdateAsync(institute);

            return await UpdateInstituteToken();
        }

        public async Task<AvailableModulesResponse> GetAvailableModules()
        {
            var availableModules = await _instituteService.GetAvailableModules();

            return availableModules.IsNullOrEmpty()
                ? new AvailableModulesResponse(false, null)
                : new AvailableModulesResponse(true, availableModules);
        }

        public async Task<RequestResponse> UploadInstituteLogo(InstituteLogo instituteLogo) =>
            RequestResponse.Success((await _instituteLogoService.UploadInstituteLogo(instituteLogo)).AsJson());

        public async Task<RequestResponse> DeleteInstituteLogo() => RequestResponse.Success((await _instituteLogoService.DeleteInstituteLogo()).AsJson());

        public async Task<RequestResponse> GetInstituteLogo()
        {
            var instituteLogo = await _instituteLogoService.GetInstituteLogo();

            return instituteLogo != null ? RequestResponse.Success(instituteLogo.AsJson()) : RequestResponse.Fail("No institute logo uploaded");
        }

        public async Task<RequestResponse> GetHtmlTemplates() =>
            RequestResponse.Success((await _htmlTemplateService.GetHtmlTemplates()).AsJson());

        public async Task<RequestResponse> UploadHtmlTemplates(HtmlTemplates htmlTemplates) =>
            RequestResponse.Success((await _htmlTemplateService.UploadHtmlTemplates(htmlTemplates)).AsJson());

        public async Task<RequestResponse> RemoveHtmlTemplates(HtmlTemplates htmlTemplates) =>
            RequestResponse.Success((await _htmlTemplateService.RemoveHtmlTemplates(htmlTemplates)).AsJson());

        public async Task<InstituteListResponse> GetInstitutes(InstituteListOptions listOptions)
        {
            if (listOptions?.PageSize > 50)
                listOptions.PageSize = 50;

            var result = await _instituteManager.GetInstitutes(listOptions);
            return new InstituteListResponse
            {
                Institutes = result,
                ListInfo = new InstituteListInfo
                {
                    Page = result.Page,
                    PageSize = result.PageSize,
                    TotalCount = result.TotalCount,
                    TotalPages = result.TotalPages
                }
            };
        }

        public async Task<Institute> GetByIdAsync(Guid id, Expression<Func<Institute, bool>> predicate = null) => await _instituteManager.GetByIdAsync(id);

        public async Task<Institute> GetByIdAsync(Guid id, string[] includes, Expression<Func<Institute, bool>> predicate = null) =>
            await _instituteManager.GetByIdAsync(id, includes);

        public Task<List<Institute>> GetByIdsAsync(List<Guid> ids, Expression<Func<Institute, bool>> predicate = null) => _instituteManager.GetByIdsAsync(ids);

        public async Task<Institute> GetAsNoTrackingAsync(Guid id) => await _instituteManager.GetAsNoTrackingAsync(id);

        public async Task<List<Institute>> GetAllAsync() => await _instituteManager.GetAllAsync();

        public IQueryable<Institute> GetManyQueryable(Expression<Func<Institute, bool>> predicate) => _instituteManager.GetManyQueryable(predicate);

        public Task<List<Institute>> GetManyAsync(Expression<Func<Institute, bool>> predicate) => _instituteManager.GetManyAsync(predicate);

        public Task<Institute> GetFirstOrDefaultAsync(Expression<Func<Institute, bool>> predicate, string[] includes = null) =>
            _instituteManager.GetFirstOrDefaultAsync(predicate, includes);

        public Task<Institute> GetSingleAsync(Expression<Func<Institute, bool>> predicate, string[] includes = null) =>
            _instituteManager.GetSingleAsync(predicate, includes);

        public Task<Institute> GetSingleOrDefaultAsync(Expression<Func<Institute, bool>> predicate) => _instituteManager.GetSingleOrDefaultAsync(predicate);

        public Task<bool> AnyAsync(Guid id) => _instituteManager.AnyAsync(id);

        public Task<bool> AnyAsync(Expression<Func<Institute, bool>> predicate) => _instituteManager.AnyAsync(predicate);

        public Task<Institute> AddAsync(Institute model, bool keepId = false) => _instituteManager.AddAsync(model, keepId);

        public Task AddRangeAsync(IEnumerable<Institute> models) => _instituteManager.AddRangeAsync(models);

        public Task<Institute> UpdateAsync(Institute model) => _instituteManager.UpdateAsync(model);

        public Task UpdateByPropertiesAsync(Institute model, IEnumerable<string> properties) => _instituteManager.UpdateByPropertiesAsync(model, properties);

        public Task RemoveAsync(Guid id) => _instituteManager.RemoveAsync(id);

        public Task RemoveAllAsync() => _instituteManager.RemoveAllAsync();

        public Task<int> CountAsync(Expression<Func<Institute, bool>> predicate) => _instituteManager.CountAsync(predicate);

        public Task<bool> IsAlive() => _instituteManager.IsAlive();
    }
}
