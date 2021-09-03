using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;
using RadioReport.Common.API.Enums;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Extensions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Models;
using UAParser;
using JwtPayload = RadioReport.Common.API.Models.JwtPayload;

namespace RadioReport.Common.API.Middlewares
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class AuthTokenValidationMiddleware
    {
        private readonly IKafkaProducer _kafkaProducer;
        private readonly ICacheService _cacheService;
        private readonly ILogger<AuthTokenValidationMiddleware> _logger;
        private readonly RequestDelegate _next;

        public AuthTokenValidationMiddleware(RequestDelegate next, ILogger<AuthTokenValidationMiddleware> logger, IKafkaProducer kafkaProducer,
            ICacheService cacheService)
        {
            _next = next;
            _logger = logger;
            _kafkaProducer = kafkaProducer;
            _cacheService = cacheService;
        }

        // the middleware validates the request jwt token if available regarding the expiration of access or refresh token time + existence of token id by querying the
        // according entry in the UserDb AuthToken table with user + token id. Invalid state returns 401 status code, valid jwt payload data is added to the
        // HttpContext items collection 
        public async Task InvokeAsync(HttpContext context, HttpAuthContext httpAuthContext, IWebHostEnvironment environment)
        {
            if (context == null)
            {
                _logger.LogError("HttpContext is null");
                return;
            }

            if (httpAuthContext == null)
            {
                context.Response.StatusCode = StatusCodes.Status500InternalServerError;
                await context.Response.WriteAsync("Error during authentication token validation");
                _logger.LogError("HttpAuthContext is null");
                return;
            }

            if (!HasJwtToken(context.Request) &&
                !HasApiToken(context.Request) &&
                !InstituteTokenPath(context.Request))
            {
                await _next(context);
                return;
            }

            var tokenType = GetTokenType(context);
            var tokenString = GetTokenString(context, tokenType);
            var jwtPayload = GetJwtPayload(tokenString);
            if (tokenType == TokenType.InstituteToken) jwtPayload.UserRole = UserRole.Viewer;

            if (!CorrectApplicationAccess(jwtPayload, context.Request, environment))
            {
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                await context.Response.WriteAsync("Access token does not match accessed application");
                _logger.LogWarning("Access attempt with invalidated " + tokenType + " | {JwtPayload} | {HttpAuthContext}", jwtPayload.AsIndentedJson(),
                    httpAuthContext.AsIndentedJson());
                return;
            }

            PopulateHttpAuthContext(jwtPayload, httpAuthContext);
            if (!HttpAuthContextValid(httpAuthContext, tokenType))
            {
                _logger.LogWarning("Access attempt with invalid http auth context");
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                await context.Response.WriteAsync("Invalid http auth context");
                return;
            }

            var validationResult = await ValidateToken(context, httpAuthContext, tokenType, jwtPayload, tokenString);
            switch (validationResult)
            {
                case TokenValidationResult.InternalError:
                    context.Response.StatusCode = StatusCodes.Status500InternalServerError;
                    await context.Response.WriteAsync("Error during authentication token validation");
                    _logger.LogError("Validating " + tokenType + " failed | {JwtPayload} | {HttpAuthContext}", jwtPayload.AsIndentedJson(),
                        httpAuthContext.AsIndentedJson());
                    return;
                case TokenValidationResult.UnauthenticatedTokenInvalid:
                    context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                    await context.Response.WriteAsync("Invalid authentication token");
                    _logger.LogWarning("Access attempt with invalidated " + tokenType + " | {JwtPayload} | {HttpAuthContext}", jwtPayload.AsIndentedJson(),
                        httpAuthContext.AsIndentedJson());
                    return;
                case TokenValidationResult.Valid:
                    PopulateHttpContextItems(context, jwtPayload);
                    Helper.SetDisplayLanguage(jwtPayload.LanguageCode);
                    await _next(context);
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        private static bool CorrectApplicationAccess(JwtPayload jwtPayload, HttpRequest httpRequest, IHostEnvironment environment)
        {
            if (environment.IsStaging() || environment.IsDevelopment()) return true;

            var isRsdPath = httpRequest.Path.Value.Contains($"/{ConfigurationConsts.RsdEndpointPrefix}/", StringComparison.InvariantCultureIgnoreCase);
            var isAvailableModulesPath =
                httpRequest.Path.Value.Contains(ConfigurationConsts.AvailableModulesPathSuffix, StringComparison.InvariantCultureIgnoreCase);

            switch (jwtPayload.Application)
            {
                case Application.None:
                    return false;
                case Application.RSD when isRsdPath || isAvailableModulesPath:
                case Application.RR when !isRsdPath:
                    return true;
                default:
                    return false;
            }
        }

        private static JwtPayload GetJwtPayload(string tokenString)
        {
            var jwtToken = new JwtSecurityTokenHandler().ReadJwtToken(tokenString);
            var userIdString = GetPayloadValue<string>(JwtPayloadKey.UserId);
            var instituteIdString = GetPayloadValue<string>(JwtPayloadKey.InstituteId);
            var userRoleString = GetPayloadValue<string>(JwtPayloadKey.UserRole);
            var tokenIdString = GetPayloadValue<string>(JwtPayloadKey.TokenId);
            var applicationString = GetPayloadValue<string>(JwtPayloadKey.Application);
            var duplicateExternalIdentifierAllowed = GetPayloadValue<bool>(JwtPayloadKey.DuplicateExternalIdentifierAllowed);
            var languageCode = GetPayloadValue<string>(JwtPayloadKey.LanguageCode);

            return new JwtPayload
            {
                UserId = userIdString.IsNullOrEmpty() ? Guid.Empty : Guid.Parse(userIdString),
                InstituteId = instituteIdString.IsNullOrEmpty() ? Guid.Empty : Guid.Parse(instituteIdString),
                UserRole = userRoleString.IsNullOrEmpty() ? UserRole.None : Enum.Parse<UserRole>(userRoleString),
                TokenId = tokenIdString.IsNullOrEmpty() ? Guid.Empty : Guid.Parse(tokenIdString),
                Application = applicationString.IsNullOrEmpty() ? Application.None : Enum.Parse<Application>(applicationString),
                DuplicateExternalIdentifierAllowed = duplicateExternalIdentifierAllowed,
                LanguageCode = languageCode
            };

            T GetPayloadValue<T>(string key) => jwtToken.Payload.ContainsKey(key) ? (T) jwtToken.Payload[key] : default;
        }

        private static string GetTokenString(HttpContext context, TokenType tokenType)
        {
            return tokenType == TokenType.InstituteToken && HasApiToken(context.Request)
                ? (string) context.Request.Query[AuthConst.ApiTokenQueryKey]
                : GetJwtString(context.Request);
        }

        private static string GetJwtString(HttpRequest request) =>
            request.Headers[HeaderNames.Authorization].First().Substring(AuthConst.BearerPrefix.Length).Trim();

        private static TokenType GetTokenType(HttpContext context)
        {
            if (context.Request.Path.Value.Contains("/loginwithrefreshtoken", StringComparison.OrdinalIgnoreCase)) return TokenType.RefreshToken;

            if (context.Request.Path.Value.Contains("/loginwithclienttoken", StringComparison.OrdinalIgnoreCase)) return TokenType.ClientToken;

            return InstituteTokenPath(context.Request) ? TokenType.InstituteToken : TokenType.AccessToken;
        }

        private static bool HasApiToken(HttpRequest request) => request.Query.ContainsKey(AuthConst.ApiTokenQueryKey);

        private static bool HasJwtToken(HttpRequest request)
        {
            return request.Headers.ContainsKey(HeaderNames.Authorization) &&
                   !request.Headers[HeaderNames.Authorization].IsNullOrEmpty() &&
                   request.Headers[HeaderNames.Authorization].First().Length > AuthConst.BearerPrefix.Length &&
                   !request.Headers[HeaderNames.Authorization]
                       .First()
                       .Substring(AuthConst.BearerPrefix.Length)
                       .Trim()
                       .IsNullOrEmpty();
        }

        private static bool HttpAuthContextValid(HttpAuthContext httpAuthContext, TokenType tokenType)
        {
            switch (tokenType)
            {
                case TokenType.InstituteToken:
                    return httpAuthContext.Application != Application.None &&
                           !httpAuthContext.InstituteId.IsEmpty();
                case TokenType.AccessToken:
                    return httpAuthContext.Application != Application.None &&
                           httpAuthContext.UserRole != UserRole.None &&
                           !httpAuthContext.UserId.IsEmpty() &&
                           !httpAuthContext.InstituteId.IsEmpty();
                case TokenType.RefreshToken:
                    return httpAuthContext.Application != Application.None &&
                           !httpAuthContext.UserId.IsEmpty();
                case TokenType.ClientToken:
                    return httpAuthContext.Application != Application.None &&
                           httpAuthContext.UserRole != UserRole.None &&
                           !httpAuthContext.UserId.IsEmpty();
                default:
                    throw new ArgumentOutOfRangeException(nameof(tokenType), tokenType, null);
            }
        }

        private static bool InstituteTokenPath(HttpRequest request) =>
            ConfigurationConsts.UseInstituteTokenPaths.Any(path => request.Path.Value.EndsWith(path, StringComparison.OrdinalIgnoreCase));

        private static void PopulateHttpAuthContext(JwtPayload jwtPayload, HttpAuthContext httpAuthContext)
        {
            httpAuthContext.InstituteId = jwtPayload.InstituteId;
            httpAuthContext.UserId = jwtPayload.UserId;
            httpAuthContext.UserRole = jwtPayload.UserRole;
            httpAuthContext.Application = jwtPayload.Application;
            httpAuthContext.LanguageCode = jwtPayload.LanguageCode;
        }

        private static void PopulateHttpContextItems(HttpContext context, JwtPayload jwtPayload)
        {
            context.Items[nameof(JwtPayload)] = jwtPayload;
            context.Items[JwtPayloadKey.UserId] = jwtPayload.UserId;
            context.Items[JwtPayloadKey.UserRole] = jwtPayload.UserRole;
            context.Items[JwtPayloadKey.InstituteId] = jwtPayload.InstituteId;
            context.Items[JwtPayloadKey.TokenId] = jwtPayload.TokenId;
            context.Items[JwtPayloadKey.Application] = jwtPayload.Application.ToString();
            context.Items[JwtPayloadKey.LanguageCode] = jwtPayload.LanguageCode;
        }

        private async Task<TokenValidationResult> ValidateToken(HttpContext context, HttpAuthContext httpAuthContext, TokenType tokenType,
            JwtPayload jwtPayload,
            string tokenString)
        {
            switch (tokenType)
            {
                case TokenType.AccessToken:
                    return await ValidateAuthToken(jwtPayload, false, httpAuthContext);
                case TokenType.RefreshToken:
                    return await ValidateAuthToken(jwtPayload, true, httpAuthContext);
                case TokenType.ClientToken:
                    return await ValidateClientToken(jwtPayload, context.Request, httpAuthContext);
                case TokenType.InstituteToken:
                    return await ValidateInstituteToken(tokenString, httpAuthContext);
                default:
                    throw new ArgumentOutOfRangeException(nameof(tokenType), tokenType, null);
            }
        }

        private async Task<TokenValidationResult> ValidateAuthToken(JwtPayload jwtPayload, bool isRefreshToken, HttpAuthContext httpAuthContext)
        {
            if (!isRefreshToken && jwtPayload.Application == Application.RR)
            {
                var tokenCacheEntry = await _cacheService.Get(RedisKeyHelper.AccessToken(jwtPayload.UserId));
                if (!tokenCacheEntry.IsNullOrEmpty())
                {
                    return tokenCacheEntry == jwtPayload.TokenId.ToString() ? TokenValidationResult.Valid : TokenValidationResult.UnauthenticatedTokenInvalid;
                }
            }

            var tokenRequest = new GetAuthTokenSyncRequest
            {
                UserId = jwtPayload.UserId,
                AccessTokenId = isRefreshToken ? Guid.Empty : jwtPayload.TokenId,
                RefreshTokenId = isRefreshToken ? jwtPayload.TokenId : Guid.Empty,
                Application = jwtPayload.Application,
                KeepCacheEntry = true,
                CacheLifeTimeMinutes = Redis.Expirations.AccessTokenMinutes
            };
            var tokenResponse = await _kafkaProducer.SendSynchronousRequest<GetAuthTokenSyncResponse>(tokenRequest, httpAuthContext);
            if (!tokenResponse.IsSuccess) return TokenValidationResult.InternalError;
            if (tokenResponse.IsInvalidated) return TokenValidationResult.UnauthenticatedTokenInvalid;

            if (!isRefreshToken && jwtPayload.Application == Application.RR)
            {
                await _cacheService.Set(RedisKeyHelper.AccessToken(jwtPayload.UserId), jwtPayload.TokenId.ToString(),
                    TimeSpan.FromMinutes(Redis.Expirations.AccessTokenMinutes));
            }

            return TokenValidationResult.Valid;
        }

        private async Task<TokenValidationResult> ValidateClientToken(JwtPayload jwtPayload, HttpRequest request, HttpAuthContext httpAuthContext)
        {
            var uaParser = Parser.GetDefault();
            var userAgent = request.Headers[AuthConst.UserAgent].FirstOrDefault();
            var clientInfo = uaParser.Parse(userAgent);
            if (clientInfo == null) return TokenValidationResult.InternalError;

            var tokenRequest = new ValidateClientTokenRequest
            {
                ClientTokenId = jwtPayload.TokenId,
                Application = jwtPayload.Application,
                Browser = clientInfo.UA.Family,
                OperatingSystem = clientInfo.OS.Family
            };
            var tokenResponse = await _kafkaProducer.SendSynchronousRequest<ValidateClientTokenResponse>(tokenRequest, httpAuthContext);
            if (!tokenResponse.IsSuccess) return TokenValidationResult.InternalError;

            return tokenResponse.IsValid ? TokenValidationResult.Valid : TokenValidationResult.UnauthenticatedTokenInvalid;
        }

        private async Task<TokenValidationResult> ValidateInstituteToken(string instituteTokenString, HttpAuthContext httpAuthContext)
        {
            var tokenRequest = new ValidateInstituteTokenRequest
            {
                InstituteToken = instituteTokenString
            };
            var tokenResponse = await _kafkaProducer.SendSynchronousRequest<ValidateInstituteTokenResponse>(tokenRequest, httpAuthContext);
            if (!tokenResponse.IsSuccess) return TokenValidationResult.InternalError;

            return tokenResponse.IsValid ? TokenValidationResult.Valid : TokenValidationResult.UnauthenticatedTokenInvalid;
        }
    }
}
