using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models;

namespace RadioReport.Core.Users.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/Core/Users/Auth")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountHttpManager _accountHttpManager;

        public AccountController(IAccountHttpManager accountHttpManager)
        {
            _accountHttpManager = accountHttpManager;
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<ActionResult<AuthResponse>> Login([FromBody] LoginRequest request)
        {
            if (!ModelState.IsValid) return BadRequest();

            return Ok(await _accountHttpManager.Login(request, HttpContext.GetUserAgent()));
        }

        [Authorized(Role.All)]
        [HttpPost("LoginWithRefreshToken")]
        public async Task<ActionResult<AuthResponse>> LoginWithRefreshToken([FromQuery] bool rememberMe) =>
            Ok(await _accountHttpManager.LoginWithRefreshToken(rememberMe, HttpContext.GetUserAgent()));

        [Authorized(Role.All)]
        [HttpPost("LoginWithClientToken")]
        public async Task<ActionResult<AuthResponse>> LoginWithClientToken() => Ok(await _accountHttpManager.LoginWithClientToken(HttpContext.GetUserAgent()));

        [Authorized(Role.All)]
        [HttpGet("GetClientTokens")]
        public async Task<ActionResult<List<ClientToken>>> GetClientTokens() => Ok(await _accountHttpManager.GetClientTokens());

        [Authorized(Role.All)]
        [HttpDelete("RemoveClientToken/{clientTokenId}")]
        public async Task<ActionResult> RemoveClientToken(Guid clientTokenId)
        {
            await _accountHttpManager.RemoveClientToken(clientTokenId);

            return Ok();
        }

        [Authorized(Role.All)]
        [HttpGet("Logout")]
        public async Task<IActionResult> Logout()
        {
            await _accountHttpManager.Logout();

            return Ok();
        }
    }
}
