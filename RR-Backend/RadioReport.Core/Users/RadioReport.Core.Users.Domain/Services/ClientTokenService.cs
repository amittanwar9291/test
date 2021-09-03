using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models.Entities;
using UAParser;

namespace RadioReport.Core.Users.Domain.Services
{
    public class ClientTokenService : IClientTokenService
    {
        private readonly IClientTokenManager _clientTokenManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly JwtSecurityTokenHandler _jwtTokenHandler;

        public ClientTokenService(IClientTokenManager clientTokenManager, UserManager<ApplicationUser> userManager)
        {
            _clientTokenManager = clientTokenManager;
            _userManager = userManager;
            _jwtTokenHandler = new JwtSecurityTokenHandler();
        }

        public async Task<string> CreateClientToken(ApplicationUser user, string userAgent, Application application)
        {
            if (user == null) return null;
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AuthConst.JwtSecret));
            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512Signature);

            var claims = await GetClaims(user);

            var clientTokenId = Guid.NewGuid();
            var clientToken = new JwtSecurityToken(claims: claims, expires: DateTime.Now.AddYears(10),
                signingCredentials: signingCredentials)
            {
                Payload =
                {
                    [JwtPayloadKey.UserId] = user.Id,
                    [JwtPayloadKey.UserRole] = user.UserRoles.FirstOrDefault()?.Role?.Name,
                    [JwtPayloadKey.TokenId] = clientTokenId,
                    [JwtPayloadKey.Application] = application
                }
            };

            var clientTokenString = _jwtTokenHandler.WriteToken(clientToken);
            var uaParser = Parser.GetDefault();
            var clientInfo = uaParser.Parse(userAgent);
            await _clientTokenManager.AddAsync(PopulateClientToken(new ClientToken()), true);

            return clientTokenString;

            ClientToken PopulateClientToken(ClientToken token)
            {
                token.Id = clientTokenId;
                token.UserId = Guid.Parse(user.Id);
                token.Application = application;
                token.Browser = clientInfo.UA.Family;
                token.OperatingSystem = clientInfo.OS.Family;

                return token;
            }
        }

        public async Task<bool> ValidateClientToken(Guid clientTokenId, string browser, string operatingSystem, Application application) =>
            await _clientTokenManager.CountAsync(c =>
                c.Id == clientTokenId &&
                c.Browser == browser &&
                c.OperatingSystem == operatingSystem &&
                c.Application == application) == 1;

        public async Task RemoveClientToken(Guid clientTokenId) => await _clientTokenManager.RemoveAsync(clientTokenId);

        public async Task<List<ClientToken>> GetClientTokens(Guid userId) => (await _clientTokenManager.GetManyAsync(p => p.UserId == userId)).ToList();

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
