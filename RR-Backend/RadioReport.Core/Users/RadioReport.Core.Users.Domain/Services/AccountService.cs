using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models;
using RadioReport.Core.Users.Domain.Models.Entities;

namespace RadioReport.Core.Users.Domain.Services
{
    public class AccountService : IAccountService
    {
        private readonly IApplicationUserManager _applicationUserManager;
        private readonly IClientTokenService _clientTokenService;
        private readonly IAuthTokenService _authTokenService;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly UserManager<ApplicationUser> _userManager;

        public AccountService(
            IApplicationUserManager applicationUserManager,
            IClientTokenService clientTokenService,
            IAuthTokenService authTokenService,
            HttpAuthContext httpAuthContext,
            UserManager<ApplicationUser> userManager
        )
        {
            _applicationUserManager = applicationUserManager;
            _clientTokenService = clientTokenService;
            _authTokenService = authTokenService;
            _httpAuthContext = httpAuthContext;
            _userManager = userManager;
        }

        public async Task<LoginResult> Login(LoginRequest request, string userAgent)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            _httpAuthContext.InstituteId = request.InstituteId;

            var (user, result) = await GetUser(() => _applicationUserManager.GetByCondition(u => u.UserName == request.UserName));
            if (result.UserNotFound || result.IsDeactivated) return result;

            var isPasswordValid = await _userManager.CheckPasswordAsync(user, request.Password);
            if (!isPasswordValid)
            {
                result.IsInvalidPassword = true;

                return result;
            }

            await CreateAndAssignAuthToken(
                result,
                () => _authTokenService.CreateAuthToken(user, request.Application),
                request.RememberMe,
                userAgent,
                user,
                request.Application
            );

            return result;
        }

        public async Task<LoginResult> LoginWithRefreshToken(bool rememberMe, string userAgent)
        {
            var (user, result) = await GetUser(() => _applicationUserManager.GetById(_httpAuthContext.UserId.ToString()));
            if (result.UserNotFound || result.IsDeactivated) return result;

            await CreateAndAssignAuthToken(
                result,
                () => _authTokenService.RefreshAuthToken(_httpAuthContext.UserId, _httpAuthContext.Application),
                rememberMe,
                userAgent,
                user,
                _httpAuthContext.Application
            );

            return result;
        }

        public async Task<LoginResult> LoginWithClientToken(string userAgent)
        {
            var (user, result) = await GetUser(() => _applicationUserManager.GetById(_httpAuthContext.UserId.ToString()));
            if (result.UserNotFound || result.IsDeactivated) return result;

            await CreateAndAssignAuthToken(
                result,
                () => _authTokenService.CreateAuthToken(user, _httpAuthContext.Application),
                true,
                userAgent,
                user,
                _httpAuthContext.Application
            );

            return result;
        }

        public async Task Logout() => await _authTokenService.RemoveAuthToken(_httpAuthContext.UserId, _httpAuthContext.Application);

        private static async Task<(ApplicationUser User, LoginResult Result)> GetUser(Func<Task<ApplicationUser>> userProvider)
        {
            var user = await userProvider();
            var result = new LoginResult();
            if (user == null)
            {
                result.UserNotFound = true;
            }

            if (user?.IsActive == false)
            {
                result.IsDeactivated = true;
            }

            return (user, result);
        }

        private async Task CreateAndAssignAuthToken(
            LoginResult result,
            Func<Task<(string AccessToken, string RefreshToken)>> tokenFactory,
            bool rememberMe,
            string userAgent,
            ApplicationUser user,
            Application application)
        {
            var (accessToken, refreshToken) = await tokenFactory();
            result.AccessToken = accessToken;
            result.RefreshToken = refreshToken;

            if (rememberMe && application == Application.RR && !userAgent.IsNullOrEmpty())
            {
                result.ClientToken = await _clientTokenService.CreateClientToken(user, userAgent, application);
            }
        }
    }
}
