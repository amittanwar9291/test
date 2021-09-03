using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.AspNetCore.Identity;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models;
using RadioReport.Core.Users.Domain.Models.Entities;
using RadioReport.Core.Users.Domain.Services;
using Xunit;

namespace RadioReport.Tests.Users
{
    public class AccountManagerTests
    {
        private readonly AccountService _classUnderTest;
        private readonly IApplicationUserManager _applicationUserManagerFake;
        private readonly IClientTokenService _clientTokenServiceFake;
        private readonly IAuthTokenService _authTokenServiceFake;
        private readonly HttpAuthContext _httpAuthContextFake;
        private readonly UserManager<ApplicationUser> _userManagerFake;

        public AccountManagerTests()
        {
            _applicationUserManagerFake = A.Fake<IApplicationUserManager>();
            _clientTokenServiceFake = A.Fake<IClientTokenService>();
            _authTokenServiceFake = A.Fake<IAuthTokenService>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            _userManagerFake = A.Fake<UserManager<ApplicationUser>>();
            _classUnderTest = new AccountService(_applicationUserManagerFake, _clientTokenServiceFake,
                _authTokenServiceFake,
                _httpAuthContextFake, _userManagerFake);
        }

        [Fact]
        public async void Login_DeactivatedUser_IsDeactivatedReturned()
        {
            // Arrange
            var request = new LoginRequest();
            var userAgent = string.Empty;
            A.CallTo(() => _applicationUserManagerFake.GetByName(A<string>.Ignored)).Returns(Task.FromResult(
                new ApplicationUser { IsActive = false }));

            // Act
            var result = await _classUnderTest.Login(request, userAgent);

            // Assert
            Assert.True(result.IsDeactivated);
        }

        [Fact]
        public async void Login_InvalidPasswordLogin_IsInvalidPasswordReturned()
        {
            // Arrange
            var request = new LoginRequest();
            var userAgent = string.Empty;
            A.CallTo(() => _applicationUserManagerFake.GetByCondition(A<Expression<Func<ApplicationUser, bool>>>.Ignored))
                .Returns(Task.FromResult(new ApplicationUser { IsActive = true }));
            A.CallTo(() => _userManagerFake.CheckPasswordAsync(A<ApplicationUser>.Ignored, A<string>.Ignored)).Returns(Task.FromResult(false));

            // Act
            var result = await _classUnderTest.Login(request, userAgent);

            // Assert
            Assert.False(result.IsDeactivated);
            Assert.True(result.IsInvalidPassword);
        }

        [Fact]
        public async void Login_ValidLoginWithRememberMe_TokensAssigned()
        {
            // Arrange
            var request = new LoginRequest
            {
                RememberMe = true,
                Application = Application.RR
            };
            const string userAgent = "the_agent";
            A.CallTo(() => _applicationUserManagerFake.GetByCondition(A<Expression<Func<ApplicationUser, bool>>>.Ignored))
                .Returns(Task.FromResult(new ApplicationUser { IsActive = true }));
            A.CallTo(() => _userManagerFake.CheckPasswordAsync(A<ApplicationUser>.Ignored, A<string>.Ignored)).Returns(Task.FromResult(true));
            const string expectedAccessToken = "expectedAccessToken";
            const string expectedRefreshToken = "expectedRefreshToken";
            const string expectedClientToken = "expectedClientToken";
            A.CallTo(() => _clientTokenServiceFake.CreateClientToken(A<ApplicationUser>.Ignored, A<string>.Ignored, A<Application>.Ignored))
                .Returns(Task.FromResult("expectedClientToken"));
            A.CallTo(() => _authTokenServiceFake.CreateAuthToken(A<ApplicationUser>.Ignored, A<Application>.Ignored))
                .Returns(Task.FromResult<(string AccessToken, string RefreshToken)>((expectedAccessToken, expectedRefreshToken)));

            // Act
            var result = await _classUnderTest.Login(request, userAgent);

            // Assert
            Assert.False(result.IsDeactivated);
            Assert.False(result.IsInvalidPassword);
            Assert.Equal(expectedAccessToken, result.AccessToken);
            Assert.Equal(expectedRefreshToken, result.RefreshToken);
            Assert.Equal(expectedClientToken, result.ClientToken);
        }

        [Fact]
        public async void LoginWithRefreshToken_DeactivatedUser_IsDeactivatedReturned()
        {
            // Arrange
            A.CallTo(() => _applicationUserManagerFake.GetById(A<string>.Ignored)).Returns(Task.FromResult(new ApplicationUser { IsActive = false }));

            // Act
            var result = await _classUnderTest.LoginWithRefreshToken(false, null);

            // Assert
            Assert.True(result.IsDeactivated);
        }

        [Fact]
        public async void LoginWithRefreshToken_ValidLogin_TokensAssigned()
        {
            // Arrange
            const string expectedAccessToken = "expectedAccessToken";
            const string expectedRefreshToken = "expectedRefreshToken";
            A.CallTo(() => _applicationUserManagerFake.GetById(A<string>.Ignored)).Returns(Task.FromResult(new ApplicationUser { IsActive = true }));
            A.CallTo(() => _authTokenServiceFake.RefreshAuthToken(A<Guid>.Ignored, A<Application>.Ignored))
                .Returns(Task.FromResult<(string AccessToken, string RefreshToken)>((expectedAccessToken, expectedRefreshToken)));

            // Act
            var result = await _classUnderTest.LoginWithRefreshToken(false, null);

            // Assert
            Assert.False(result.IsDeactivated);
            Assert.False(result.IsInvalidPassword);
            Assert.Equal(expectedAccessToken, result.AccessToken);
            Assert.Equal(expectedRefreshToken, result.RefreshToken);
            Assert.Null(result.ClientToken);
        }

        [Fact]
        public async void LoginWithClientToken_DeactivatedUser_IsDeactivatedReturned()
        {
            // Arrange
            A.CallTo(() => _applicationUserManagerFake.GetById(A<string>.Ignored)).Returns(Task.FromResult(new ApplicationUser { IsActive = false }));

            // Act
            var result = await _classUnderTest.LoginWithClientToken(null);

            // Assert
            Assert.True(result.IsDeactivated);
        }

        [Fact]
        public async void LoginWithClientToken_ValidLogin_TokensAssigned()
        {
            // Arrange
            const string expectedAccessToken = "expectedAccessToken";
            const string expectedRefreshToken = "expectedRefreshToken";
            A.CallTo(() => _applicationUserManagerFake.GetById(A<string>.Ignored)).Returns(Task.FromResult(new ApplicationUser { IsActive = true }));
            A.CallTo(() => _authTokenServiceFake.CreateAuthToken(A<ApplicationUser>.Ignored, A<Application>.Ignored))
                .Returns(Task.FromResult<(string AccessToken, string RefreshToken)>((expectedAccessToken, expectedRefreshToken)));

            // Act
            var result = await _classUnderTest.LoginWithClientToken(null);

            // Assert
            Assert.False(result.IsDeactivated);
            Assert.False(result.IsInvalidPassword);
            Assert.Equal(expectedAccessToken, result.AccessToken);
            Assert.Equal(expectedRefreshToken, result.RefreshToken);
            Assert.Null(result.ClientToken);
        }
    }
}
