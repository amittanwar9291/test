using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.User;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Models;

namespace RadioReport.Core.Users.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/Core/Users/Management")]
    [ApiController]
    public class UserViewModelController : ControllerBase
    {
        private readonly IUserViewModelHttpManager _userViewModelHttpManager;

        public UserViewModelController(IUserViewModelHttpManager userViewModelHttpManager)
        {
            _userViewModelHttpManager = userViewModelHttpManager;
        }

        [Authorized(Role.Admins)]
        [HttpGet]
        public async Task<ActionResult<List<UserViewModel>>> Get() => Ok(await _userViewModelHttpManager.GetAll());

        [Authorized(Role.All)]
        [HttpGet("{id}")]
        public async Task<ActionResult<UserViewModel>> GetById(string id) => Ok(await _userViewModelHttpManager.GetById(id));

        [Authorized(Role.All)]
        [HttpGet("Editing")]
        public async Task<ActionResult<List<UserViewModel>>> GetEditingUsers() => Ok(await _userViewModelHttpManager.GetEditingUsers());

        [Authorized(Role.Admins)]
        [HttpPost]
        public async Task<ActionResult> Add([FromBody] UserViewModel user)
        {
            await _userViewModelHttpManager.Add(user);

            return Ok();
        }

        [Authorized(Role.All)]
        [HttpPut]
        public async Task<ActionResult> Update([FromBody] UserViewModel user)
        {
            await _userViewModelHttpManager.UpdateAsync(user);

            return Ok();
        }

        [Authorized(Role.Admins)]
        [HttpPut("activate/{userId}")]
        public async Task<ActionResult> ActivateUser(string userId)
        {
            await _userViewModelHttpManager.SetUserActivity(userId, true);

            return Ok();
        }

        [Authorized(Role.Admins)]
        [HttpPut("deactivate/{userId}")]
        public async Task<ActionResult> DeactivateUser(string userId)
        {
            await _userViewModelHttpManager.SetUserActivity(userId, false);

            return Ok();
        }

        [Authorized(Role.All)]
        [HttpPut("ChangePassword")]
        public async Task<ActionResult<AuthResponse>> ChangePassword([FromBody] ChangePasswordRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            if (!ModelState.IsValid) return BadRequest();

            return Ok(await _userViewModelHttpManager.ChangePasswordAsync(request, HttpContext.GetUserAgent()));
        }

        [Authorized(Role.Admins)]
        [HttpPut("ResetPassword")]
        public async Task<ActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
        {
            if (!ModelState.IsValid) return BadRequest();

            await _userViewModelHttpManager.ResetPasswordAsync(request);

            return Ok();
        }

        [Authorized(Role.Superadministrator)]
        [HttpPut("SwitchInstitute")]
        public async Task<ActionResult> SwitchInstitute([FromQuery] Guid instituteId)
        {
            await _userViewModelHttpManager.SetInstituteId(instituteId);

            return Ok();
        }
    }
}
