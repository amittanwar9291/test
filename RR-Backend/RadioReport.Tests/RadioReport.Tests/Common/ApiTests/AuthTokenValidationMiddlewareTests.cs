using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using RadioReport.Common.API.Middlewares;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Models;
using RadioReport.Tests.Helpers;
using Xunit;
using static RadioReport.Tests.Helpers.FakeHelper;

namespace RadioReport.Tests.Common.ApiTests
{
    public class AuthTokenValidationMiddlewareTests
    {
        private const string RsdApplicationToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYSIsImp0aSI6IjdiNWYyM2Q5LTM0NmItNGVkMy1iYjk0LTM4NjM0NjhjYjAxNyIsInJvbGUiOiJTdXBlcmFkbWluaXN0cmF0b3IiLCJleHAiOjM2MTk2OTgwMjgsInVzZXJJZCI6IjI2NTM0NDUxLWU5YzktNGRlNi04ODdjLWVlYzVmOWVhM2FmNiIsInVzZXJSb2xlIjoiU3VwZXJhZG1pbmlzdHJhdG9yIiwiaW5zdGl0dXRlSWQiOiJjZmRlYTIyMC0zMjVmLTQ0NTAtYWYzMy0xYzQ2MmFkMzg4MzAiLCJ0b2tlbklkIjoiNTY1ZDk5MGMtZDA0ZC00MDMxLWIzY2QtMDExMjliNjg3NThiIiwiaW5pdGlhbCI6IlNBIiwiZmlyc3ROYW1lIjoiU3VwZXIiLCJzdXJuYW1lIjoiYWRtaW5pc3RyYXRvciIsImxhbmd1YWdlIjoiREUiLCJkZWZhdWx0UGFzc3dvcmQiOmZhbHNlLCJhcHBsaWNhdGlvbiI6IlJTRCJ9.DbksPmD3q0Ijo1ef5-jAMhkZ1arhX9sNccfgxFWiFsQ";

        private const string RrApplicationToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYSIsImp0aSI6IjdiNWYyM2Q5LTM0NmItNGVkMy1iYjk0LTM4NjM0NjhjYjAxNyIsInJvbGUiOiJTdXBlcmFkbWluaXN0cmF0b3IiLCJleHAiOjM2MTk2OTgwMjgsInVzZXJJZCI6IjI2NTM0NDUxLWU5YzktNGRlNi04ODdjLWVlYzVmOWVhM2FmNiIsInVzZXJSb2xlIjoiU3VwZXJhZG1pbmlzdHJhdG9yIiwiaW5zdGl0dXRlSWQiOiJjZmRlYTIyMC0zMjVmLTQ0NTAtYWYzMy0xYzQ2MmFkMzg4MzAiLCJ0b2tlbklkIjoiNTY1ZDk5MGMtZDA0ZC00MDMxLWIzY2QtMDExMjliNjg3NThiIiwiaW5pdGlhbCI6IlNBIiwiZmlyc3ROYW1lIjoiU3VwZXIiLCJzdXJuYW1lIjoiYWRtaW5pc3RyYXRvciIsImxhbmd1YWdlIjoiREUiLCJkZWZhdWx0UGFzc3dvcmQiOmZhbHNlLCJhcHBsaWNhdGlvbiI6IlJSIn0.gV2dgWUe-_8MaZLQt74JK1CVp5Q_UkguB5IbbOcIFC4";

        private const string MissingInstituteIdToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYSIsImp0aSI6IjdiNWYyM2Q5LTM0NmItNGVkMy1iYjk0LTM4NjM0NjhjYjAxNyIsInJvbGUiOiJTdXBlcmFkbWluaXN0cmF0b3IiLCJleHAiOjM2MTk2OTgwMjgsInVzZXJJZCI6IjI2NTM0NDUxLWU5YzktNGRlNi04ODdjLWVlYzVmOWVhM2FmNiIsInVzZXJSb2xlIjoiU3VwZXJhZG1pbmlzdHJhdG9yIiwidG9rZW5JZCI6IjU2NWQ5OTBjLWQwNGQtNDAzMS1iM2NkLTAxMTI5YjY4NzU4YiIsImluaXRpYWwiOiJTQSIsImZpcnN0TmFtZSI6IlN1cGVyIiwic3VybmFtZSI6ImFkbWluaXN0cmF0b3IiLCJsYW5ndWFnZSI6IkRFIiwiZGVmYXVsdFBhc3N3b3JkIjpmYWxzZSwiYXBwbGljYXRpb24iOiJSUiJ9.8NlYBFMK4WyltAXV4FIwkqsJj-nod1wI9QEp-2Ux7Bo";

        private const string MissingApplicationToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYSIsImp0aSI6IjdiNWYyM2Q5LTM0NmItNGVkMy1iYjk0LTM4NjM0NjhjYjAxNyIsInJvbGUiOiJTdXBlcmFkbWluaXN0cmF0b3IiLCJleHAiOjM2MTk2OTgwMjgsInVzZXJJZCI6IjI2NTM0NDUxLWU5YzktNGRlNi04ODdjLWVlYzVmOWVhM2FmNiIsInVzZXJSb2xlIjoiU3VwZXJhZG1pbmlzdHJhdG9yIiwiaW5zdGl0dXRlSWQiOiJjZmRlYTIyMC0zMjVmLTQ0NTAtYWYzMy0xYzQ2MmFkMzg4MzAiLCJ0b2tlbklkIjoiNTY1ZDk5MGMtZDA0ZC00MDMxLWIzY2QtMDExMjliNjg3NThiIiwiaW5pdGlhbCI6IlNBIiwiZmlyc3ROYW1lIjoiU3VwZXIiLCJzdXJuYW1lIjoiYWRtaW5pc3RyYXRvciIsImxhbmd1YWdlIjoiREUiLCJkZWZhdWx0UGFzc3dvcmQiOmZhbHNlfQ.YOzMkWjtxA2Ay5SymQyI7jMhugS_KYzykmIIlr2XHQw";

        private const string MissingUserRoleToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYSIsImp0aSI6IjdiNWYyM2Q5LTM0NmItNGVkMy1iYjk0LTM4NjM0NjhjYjAxNyIsInJvbGUiOiJTdXBlcmFkbWluaXN0cmF0b3IiLCJleHAiOjM2MTk2OTgwMjgsInVzZXJJZCI6IjI2NTM0NDUxLWU5YzktNGRlNi04ODdjLWVlYzVmOWVhM2FmNiIsImluc3RpdHV0ZUlkIjoiY2ZkZWEyMjAtMzI1Zi00NDUwLWFmMzMtMWM0NjJhZDM4ODMwIiwidG9rZW5JZCI6IjU2NWQ5OTBjLWQwNGQtNDAzMS1iM2NkLTAxMTI5YjY4NzU4YiIsImluaXRpYWwiOiJTQSIsImZpcnN0TmFtZSI6IlN1cGVyIiwic3VybmFtZSI6ImFkbWluaXN0cmF0b3IiLCJsYW5ndWFnZSI6IkRFIiwiZGVmYXVsdFBhc3N3b3JkIjpmYWxzZSwiYXBwbGljYXRpb24iOiJSUiJ9.UqgfCAeJwyNFwzqAJEcrnGZkjkjm_1Rg_GttClh0Djg";

        private const string MissingUserIdToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYSIsImp0aSI6IjdiNWYyM2Q5LTM0NmItNGVkMy1iYjk0LTM4NjM0NjhjYjAxNyIsInJvbGUiOiJTdXBlcmFkbWluaXN0cmF0b3IiLCJleHAiOjM2MTk2OTgwMjgsInVzZXJSb2xlIjoiU3VwZXJhZG1pbmlzdHJhdG9yIiwiaW5zdGl0dXRlSWQiOiJjZmRlYTIyMC0zMjVmLTQ0NTAtYWYzMy0xYzQ2MmFkMzg4MzAiLCJ0b2tlbklkIjoiNTY1ZDk5MGMtZDA0ZC00MDMxLWIzY2QtMDExMjliNjg3NThiIiwiaW5pdGlhbCI6IlNBIiwiZmlyc3ROYW1lIjoiU3VwZXIiLCJzdXJuYW1lIjoiYWRtaW5pc3RyYXRvciIsImxhbmd1YWdlIjoiREUiLCJkZWZhdWx0UGFzc3dvcmQiOmZhbHNlLCJhcHBsaWNhdGlvbiI6IlJSIn0.5CxCJggUh2CDGBHdIvE5GR6_4Zb_POxJGmR1uKVyFjs";


        private AuthTokenValidationMiddleware _classUnderTest;
        private RequestDelegate _requestDelegateFake;
        private IKafkaProducer _kafkaProducerFake;
        private ICacheService _cacheServiceFake;
        private HttpContext _httpContextFake;
        private HttpAuthContext _httpAuthContextFake;
        private IWebHostEnvironment _webHostEnvironmentFake;

        public AuthTokenValidationMiddlewareTests()
        {
            _requestDelegateFake = A.Fake<RequestDelegate>();
            _kafkaProducerFake = A.Fake<IKafkaProducer>();
            _cacheServiceFake = A.Fake<ICacheService>();
            _httpContextFake = A.Fake<HttpContext>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            _webHostEnvironmentFake = A.Fake<IWebHostEnvironment>();
            _classUnderTest = new AuthTokenValidationMiddleware(_requestDelegateFake, A.Fake<ILogger<AuthTokenValidationMiddleware>>(), _kafkaProducerFake,
                _cacheServiceFake);
        }

        [Fact]
        public async Task InvokeAsync_NoAuthHeader_DelegateNext()
        {
            // Arrange
            var requestFake = A.Fake<HttpRequest>();
            requestFake.FakePath().FakeQuery().FakeHeaders();
            _httpContextFake.FakeRequest(requestFake);

            // Act
            await _classUnderTest.InvokeAsync(_httpContextFake, _httpAuthContextFake, _webHostEnvironmentFake);

            // Assert
            A.CallTo(() => _requestDelegateFake.Invoke(_httpContextFake)).MustHaveHappened();
        }

        [Fact]
        public async Task InvokeAsync_NoBearerAuthHeader_DelegateNext()
        {
            // Arrange
            var requestFake = A.Fake<HttpRequest>();
            requestFake.FakePath().FakeQuery().FakeHeaders(new KeyValuePair<string, StringValues>("Authorization", "any"));
            _httpContextFake.FakeRequest(requestFake);

            // Act
            await _classUnderTest.InvokeAsync(_httpContextFake, _httpAuthContextFake, _webHostEnvironmentFake);

            // Assert
            A.CallTo(() => _requestDelegateFake.Invoke(_httpContextFake)).MustHaveHappened();
        }

        [Fact]
        public async Task InvokeAsync_RsdApplicationRrPath_UnauthorizedResponse()
        {
            // Arrange
            var requestFake = A.Fake<HttpRequest>();
            var responseFake = A.Fake<HttpResponse>();
            requestFake.FakePath().FakeQuery().FakeBearerAuthHeader(RsdApplicationToken);
            _httpContextFake.FakeRequest(requestFake);
            _httpContextFake.FakeResponse(responseFake);

            // Act
            try
            {
                await _classUnderTest.InvokeAsync(_httpContextFake, _httpAuthContextFake, _webHostEnvironmentFake);
            }
            catch
            {
            }

            // Assert
            Assert.Equal(StatusCodes.Status401Unauthorized, responseFake.StatusCode);
        }

        [Fact]
        public async Task InvokeAsync_RrApplicationRsdPath_UnauthorizedResponse()
        {
            // Arrange
            var requestFake = A.Fake<HttpRequest>();
            var responseFake = A.Fake<HttpResponse>();
            requestFake.FakePath("/Rsd/").FakeQuery().FakeBearerAuthHeader(RrApplicationToken);
            _httpContextFake.FakeRequest(requestFake);
            _httpContextFake.FakeResponse(responseFake);

            // Act
            try
            {
                await _classUnderTest.InvokeAsync(_httpContextFake, _httpAuthContextFake, _webHostEnvironmentFake);
            }
            catch
            {
            }

            // Assert
            Assert.Equal(StatusCodes.Status401Unauthorized, responseFake.StatusCode);
        }

        [Fact]
        public async Task InvokeAsync_MissingInstituteId_UnauthorizedResponse()
        {
            // Arrange
            var requestFake = A.Fake<HttpRequest>();
            var responseFake = A.Fake<HttpResponse>();
            requestFake.FakePath().FakeQuery().FakeBearerAuthHeader(MissingInstituteIdToken);
            _httpContextFake.FakeRequest(requestFake);
            _httpContextFake.FakeResponse(responseFake);

            // Act
            try
            {
                await _classUnderTest.InvokeAsync(_httpContextFake, _httpAuthContextFake, _webHostEnvironmentFake);
            }
            catch
            {
            }

            // Assert
            Assert.Equal(StatusCodes.Status401Unauthorized, responseFake.StatusCode);
        }

        [Fact]
        public async Task InvokeAsync_MissingApplication_UnauthorizedResponse()
        {
            // Arrange
            var requestFake = A.Fake<HttpRequest>();
            var responseFake = A.Fake<HttpResponse>();
            requestFake.FakePath().FakeQuery().FakeBearerAuthHeader(MissingApplicationToken);
            _httpContextFake.FakeRequest(requestFake);
            _httpContextFake.FakeResponse(responseFake);

            // Act
            try
            {
                await _classUnderTest.InvokeAsync(_httpContextFake, _httpAuthContextFake, _webHostEnvironmentFake);
            }
            catch
            {
            }

            // Assert
            Assert.Equal(StatusCodes.Status401Unauthorized, responseFake.StatusCode);
        }

        [Fact]
        public async Task InvokeAsync_MissingUserRole_UnauthorizedResponse()
        {
            // Arrange
            var requestFake = A.Fake<HttpRequest>();
            var responseFake = A.Fake<HttpResponse>();
            requestFake.FakePath().FakeQuery().FakeBearerAuthHeader(MissingUserRoleToken);
            _httpContextFake.FakeRequest(requestFake);
            _httpContextFake.FakeResponse(responseFake);

            // Act
            try
            {
                await _classUnderTest.InvokeAsync(_httpContextFake, _httpAuthContextFake, _webHostEnvironmentFake);
            }
            catch
            {
            }

            // Assert
            Assert.Equal(StatusCodes.Status401Unauthorized, responseFake.StatusCode);
        }

        [Fact]
        public async Task InvokeAsync_MissingUserId_UnauthorizedResponse()
        {
            // Arrange
            var requestFake = A.Fake<HttpRequest>();
            var responseFake = A.Fake<HttpResponse>();
            requestFake.FakePath().FakeQuery().FakeBearerAuthHeader(MissingUserIdToken);
            _httpContextFake.FakeRequest(requestFake);
            _httpContextFake.FakeResponse(responseFake);

            // Act
            try
            {
                await _classUnderTest.InvokeAsync(_httpContextFake, _httpAuthContextFake, _webHostEnvironmentFake);
            }
            catch
            {
            }

            // Assert
            Assert.Equal(StatusCodes.Status401Unauthorized, responseFake.StatusCode);
        }

        [Fact]
        public async Task InvokeAsync_InvalidTokenRequest_InternalError()
        {
            // Arrange
            var requestFake = A.Fake<HttpRequest>();
            var responseFake = A.Fake<HttpResponse>();
            requestFake.FakePath().FakeQuery().FakeBearerAuthHeader(RrApplicationToken);
            _httpContextFake.FakeRequest(requestFake);
            _httpContextFake.FakeResponse(responseFake);
            var tokenSyncResponse = new GetAuthTokenSyncResponse { IsSuccess = false };
            A.CallTo(() => _kafkaProducerFake.SendSynchronousRequest<GetAuthTokenSyncResponse>(A<GetAuthTokenSyncRequest>.Ignored, _httpAuthContextFake,
                IgnoredInt, IgnoredCt)).Returns(tokenSyncResponse);

            // Act
            try
            {
                await _classUnderTest.InvokeAsync(_httpContextFake, _httpAuthContextFake, _webHostEnvironmentFake);
            }
            catch
            {
            }

            // Assert
            Assert.Equal(StatusCodes.Status500InternalServerError, responseFake.StatusCode);
        }

        [Fact]
        public async Task InvokeAsync_InvalidedTokenRequest_Unauthorized()
        {
            // Arrange
            var requestFake = A.Fake<HttpRequest>();
            var responseFake = A.Fake<HttpResponse>();
            requestFake.FakePath().FakeQuery().FakeBearerAuthHeader(RrApplicationToken);
            _httpContextFake.FakeRequest(requestFake);
            _httpContextFake.FakeResponse(responseFake);
            var tokenSyncResponse = new GetAuthTokenSyncResponse { IsSuccess = true, IsInvalidated = true };
            A.CallTo(() => _kafkaProducerFake.SendSynchronousRequest<GetAuthTokenSyncResponse>(A<GetAuthTokenSyncRequest>.Ignored, _httpAuthContextFake,
                IgnoredInt, IgnoredCt)).Returns(tokenSyncResponse);

            // Act
            try
            {
                await _classUnderTest.InvokeAsync(_httpContextFake, _httpAuthContextFake, _webHostEnvironmentFake);
            }
            catch
            {
            }

            // Assert
            Assert.Equal(StatusCodes.Status401Unauthorized, responseFake.StatusCode);
        }
    }
}
