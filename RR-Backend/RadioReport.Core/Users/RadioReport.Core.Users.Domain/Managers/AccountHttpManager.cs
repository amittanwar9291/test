using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Exceptions.Identity;
using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Common.Models;
using RadioReport.Core.Users.Domain.Helpers;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models;

namespace RadioReport.Core.Users.Domain.Managers
{
    public class AccountHttpManager : IAccountHttpManager
    {
        private readonly IAccountService _accountService;
        private readonly IClientTokenService _clientTokenService;
        private readonly HttpAuthContext _httpAuthContext;

        public AccountHttpManager(IAccountService accountService, IClientTokenService clientTokenService, HttpAuthContext httpAuthContext)
        {
            _accountService = accountService;
            _clientTokenService = clientTokenService;
            _httpAuthContext = httpAuthContext;
        }

        public async Task<AuthResponse> Login(LoginRequest request, string userAgent)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            var result = await _accountService.Login(request, userAgent);
            ValidateResult(result, request.UserName);

            return CreateResponse(result);
        }

        public async Task<AuthResponse> LoginWithRefreshToken(bool rememberMe, string userAgent)
        {
            var result = await _accountService.LoginWithRefreshToken(rememberMe, userAgent);
            ValidateResult(result, _httpAuthContext.UserId);

            return CreateResponse(result);
        }

        public async Task<AuthResponse> LoginWithClientToken(string userAgent)
        {
            var result = await _accountService.LoginWithClientToken(userAgent);
            ValidateResult(result, _httpAuthContext.UserId);

            return CreateResponse(result);
        }

        public Task<List<ClientToken>> GetClientTokens() => _clientTokenService.GetClientTokens(_httpAuthContext.UserId);

        public async Task RemoveClientToken(Guid clientTokenId) => await _clientTokenService.RemoveClientToken(clientTokenId);
        
        public async Task Logout() => await _accountService.Logout();

        private static void ValidateResult(LoginResult result, object logData)
        {
            if (result.UserNotFound)
            {
                throw new LoginFailedException($"Username doesn't exist. {logData}", IdentityErrors.IncorrectUserNameOrPassword);
            }

            if (result.IsDeactivated)
            {
                throw new LoginFailedException($"User is deactivated. {logData}", IdentityErrors.InactiveUser);
            }

            if (result.IsInvalidPassword)
            {
                throw new LoginFailedException($"Invalid password. {logData}", IdentityErrors.IncorrectUserNameOrPassword);
            }
        }

        private static AuthResponse CreateResponse(LoginResult result) =>
            new AuthResponse
            {
                AccessToken = result.AccessToken,
                RefreshToken = result.RefreshToken,
                ClientToken = result.ClientToken
            };
    }
}
