using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using RadioReport.Common.Consts;
using RadioReport.Common.Helpers;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.Domain.Services
{
    public class AuthTokenService : IAuthTokenService
    {
        private readonly IOptions<JwtOptions> _jwtOptions;
        private readonly IApplicationUserManager _applicationUserManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IAuthTokenManager _authTokenManager;
        private readonly ICacheService _cacheService;
        private readonly JwtSecurityTokenHandler _jwtTokenHandler;

        public AuthTokenService(
            IOptions<JwtOptions> jwtOptions,
            IApplicationUserManager applicationUserManager,
            UserManager<ApplicationUser> userManager,
            IAuthTokenManager authTokenManager,
            ICacheService cacheService
        )
        {
            _jwtOptions = jwtOptions;
            _applicationUserManager = applicationUserManager;
            _userManager = userManager;
            _authTokenManager = authTokenManager;
            _cacheService = cacheService;
            _jwtTokenHandler = new JwtSecurityTokenHandler();
        }

        public async Task<(string AccessToken, string RefreshToken)> CreateAuthToken(ApplicationUser user, Application application)
        {
            if (user == null) return default;

            var now = DateTime.Now;
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AuthConst.JwtSecret));
            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512Signature);
            var claims = await GetClaims(user);
            var accessTokenId = Guid.NewGuid();
            var userId = Guid.Parse(user.Id);
            var accessToken = CreateAccessToken(user, application, claims, now, signingCredentials, userId, accessTokenId);
            var accessTokenString = _jwtTokenHandler.WriteToken(accessToken);

            var refreshTokenId = Guid.NewGuid();
            var refreshToken = CreateRefreshToken(application, claims, now, signingCredentials, userId, refreshTokenId);
            var refreshTokenString = _jwtTokenHandler.WriteToken(refreshToken);

            var existingAuthToken = GetByApplication(userId, application);
            if (existingAuthToken != null)
            {
                await _authTokenManager.UpdateAsync(PopulateAuthToken(existingAuthToken));
            }
            else
            {
                await _authTokenManager.AddAsync(PopulateAuthToken(new AuthToken()));
            }

            if (application == Application.RR)
            {
                await _cacheService.Set(RedisKeyHelper.AccessToken(userId), accessTokenId.ToString(),
                    TimeSpan.FromMinutes(Redis.Expirations.AccessTokenMinutes));
            }

            return (accessTokenString, refreshTokenString);

            AuthToken PopulateAuthToken(AuthToken token)
            {
                token.Id = userId;
                token.AccessTokenId = accessTokenId;
                token.AccessTokenExpiration = now.AddMinutes(_jwtOptions.Value.AccessExpirationMinutes);
                token.RefreshTokenId = refreshTokenId;
                token.RefreshTokenExpiration = now.AddMinutes(_jwtOptions.Value.RefreshExpirationMinutes);
                token.Application = application;

                return token;
            }
        }

        public async Task<(string AccessToken, string RefreshToken)> RefreshAuthToken(Guid userId, Application application) =>
            await CreateAuthToken(await _applicationUserManager.GetById(userId.ToString()), application);

        public async Task RemoveAuthToken(Guid userId, Application application)
        {
            if (application == Application.RR || application == Application.None)
            {
                await _cacheService.Remove(RedisKeyHelper.AccessToken(userId));
            }

            await _authTokenManager.DeleteAsync(userId, application);
        }

        public AuthToken GetByApplication(Guid userId, Application application) => _authTokenManager.GetByApplication(userId, application);

        public AuthToken GetByAccessTokenIdAndApplication(Guid userId, Guid accessTokenId, Application application) =>
            _authTokenManager.GetByAccessTokenIdAndApplication(userId, accessTokenId, application);

        public AuthToken GetByRefreshTokenIdAndApplication(Guid userId, Guid refreshTokenId, Application application) =>
            _authTokenManager.GetByRefreshTokenIdAndApplication(userId, refreshTokenId, application);

        private JwtSecurityToken CreateAccessToken(ApplicationUser user, Application application, List<Claim> claims, DateTime now,
            SigningCredentials signingCredentials, Guid userId, Guid accessTokenId) =>
            new JwtSecurityToken(claims: claims, expires: now.AddMinutes(_jwtOptions.Value.AccessExpirationMinutes), signingCredentials: signingCredentials)
            {
                Payload =
                {
                    [JwtPayloadKey.UserId] = userId,
                    [JwtPayloadKey.UserRole] = user.UserRoles.FirstOrDefault()?.Role?.Name,
                    [JwtPayloadKey.InstituteId] = user.InstituteId,
                    [JwtPayloadKey.TokenId] = accessTokenId,
                    [JwtPayloadKey.Initial] = user.Initial,
                    [JwtPayloadKey.FirstName] = user.FirstName,
                    [JwtPayloadKey.SurName] = user.Surname,
                    [JwtPayloadKey.Language] = user.LanguageOfProgram.ToString(),
                    [JwtPayloadKey.DefaultPassword] = user.IsDefaultPassword,
                    [JwtPayloadKey.Application] = application.ToString()
                }
            };

        private JwtSecurityToken CreateRefreshToken(Application application, List<Claim> claims, DateTime now, SigningCredentials signingCredentials,
            Guid userId, Guid refreshTokenId) =>
            new JwtSecurityToken(claims: claims, expires: now.AddMinutes(_jwtOptions.Value.RefreshExpirationMinutes), signingCredentials: signingCredentials)
            {
                Payload =
                {
                    [JwtPayloadKey.UserId] = userId,
                    [JwtPayloadKey.TokenId] = refreshTokenId,
                    [JwtPayloadKey.Application] = application.ToString()
                }
            };

        private async Task<List<Claim>> GetClaims(ApplicationUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            var userRoles = await _userManager.GetRolesAsync(user);
            claims.AddRange(userRoles.Select(role => new Claim("role", role)));

            return claims;
        }
    }
}
