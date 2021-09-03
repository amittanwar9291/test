using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.API.Controllers;
using RadioReport.Common.Consts;
using RadioReport.Core.LicenseManager.Domain.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("api/Core/LicenseManager")]
    public class LicenseController : ApiControllerBase<ILicenseHttpManager, LicenseFraction>
    {
        public LicenseController(ILicenseHttpManager manager) : base(manager)
        {
        }

        [Authorized(Role.Admins)]
        [HttpPost("UploadLicense")]
        public async Task<ActionResult> UploadLicenseFile()
        {
            var file = Request.Form?.Files?[0];
            if (file == null || file.Length <= 0) return BadRequest();

            await Manager.UploadLicenseFile(file);

            return Ok();
        }

        [Authorized(Role.Admins)]
        [HttpGet("Licenses")]
        public async Task<ActionResult<List<LicenseListItem>>> GetLicenses() => Ok(await Manager.GetLicenses());

        [Authorized(Role.Admins)]
        [HttpGet("LicenseDetails")]
        public async Task<ActionResult<LicenseDetails>> GetLicenseDetails(Guid licenseId) =>
            Ok(await Manager.GetLicenseDetails(licenseId));

        [Authorized(Role.Admins)]
        [HttpPost("LicenseFractions")]
        public async Task<ActionResult<LicenseFractionListResponse>> GetLicenseFractions([FromBody] GetLicenseFractionsRequest request) =>
            Ok(await Manager.GetLicenseFractions(request));

        [Authorized(Role.Admins)]
        [HttpGet("CurrentCreditScore")]
        public async Task<ActionResult<CurrentCreditScore>> GetCurrentCreditScore() => Ok(await Manager.GetCurrentCreditScore());
    }
}
