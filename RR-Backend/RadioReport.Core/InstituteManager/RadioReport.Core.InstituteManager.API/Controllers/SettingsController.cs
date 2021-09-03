using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Models;
using DicomMap = RadioReport.Common.Logic.Models.Import.DicomMap;

namespace RadioReport.Core.InstituteManager.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("api/Core/InstituteManager/Settings")]
    public class SettingsController : ControllerBase
    {
        private readonly ISettingsHttpManager _settingsHttpManager;

        public SettingsController(ISettingsHttpManager settingsHttpManager)
        {
            _settingsHttpManager = settingsHttpManager;
        }

        [Authorized(Role.AllButViewer)]
        [HttpGet("GetDicomMap/{moduleTypeString}")]
        public async Task<ActionResult<RequestResponse>> GetDicomMap(string moduleTypeString, [FromQuery] bool includeUniversal = true) =>
            Ok(await _settingsHttpManager.GetDicomMap(moduleTypeString, includeUniversal));

        [Authorized(Role.Admins)]
        [HttpPost("SetDicomMap")]
        public async Task<ActionResult<RequestResponse>> SetDicomMap(DicomMap dicomMap)
        {
            if (!ModelState.IsValid) return BadRequest();

            return Ok(await _settingsHttpManager.SetDicomMap(dicomMap));
        }

        [Authorized(Role.Admins)]
        [HttpPost("SetDicomMaps")]
        public async Task<ActionResult<RequestResponse>> SetDicomMap(IEnumerable<DicomMap> dicomMaps)
        {
            if (!ModelState.IsValid || dicomMaps.IsNullOrEmpty()) return BadRequest();

            return Ok(await _settingsHttpManager.SetDicomMaps(dicomMaps));
        }

        [AllowAnonymous]
        [HttpPost("Initialize")]
        public async Task<ActionResult<RequestResponse>> Initialize([FromBody] InstituteConfigurationFile instituteConfiguration)
        {
            if (!ModelState.IsValid || instituteConfiguration?.InstituteConfigJwt == null) return BadRequest();

            return Ok(await _settingsHttpManager.InitializeInstitute(instituteConfiguration));
        }

        [Authorized(Role.Admins)]
        [HttpGet("ReportSessions")]
        public async Task<ActionResult<List<ReportSessionViewModel>>> GetReportSessions() => Ok(await _settingsHttpManager.GetReportSessions());

        [Authorized(Role.Admins)]
        [HttpDelete("ReportSession")]
        public async Task<ActionResult> RemoveReportSession(string reportId, string moduleName)
        {
            await _settingsHttpManager.RemoveReportSession(reportId, moduleName);

            return Ok();
        }

        [Authorized(Role.Admins)]
        [HttpDelete("ReportSessions")]
        public async Task<ActionResult> RemoveAllReportSessions()
        {
            await _settingsHttpManager.RemoveAllReportSessions();

            return Ok();
        }
    }
}
