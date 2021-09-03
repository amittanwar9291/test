using System;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.Consts;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Models;

namespace RadioReport.Core.Tracking.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("api/Core/Tracking")]
    public class TrackingController : ControllerBase
    {
        private readonly ITrackingHttpManager _trackingHttpManager;

        public TrackingController(ITrackingHttpManager trackingHttpManager)
        {
            _trackingHttpManager = trackingHttpManager;
        }

        [Authorized(Role.AllButViewer)]
        [HttpPost("StartStopTracking")]
        public async Task<IActionResult> StartStopTracking([FromBody] StartStopTrackingRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await _trackingHttpManager.StartStopTracking(request);

            return Ok();
        }

        [Authorized(Role.Admins)]
        [HttpDelete("Tracking")]
        public async Task<IActionResult> RemoveTracking([FromBody] RemoveTrackingRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await _trackingHttpManager.RemoveTracking(request);

            return Ok();
        }

        [Authorized(Role.Admins)]
        [HttpGet("ExportCsvAll")]
        public async Task<ActionResult> ExportCsv()
        {
            var (stream, fileName) = await _trackingHttpManager.ExportCsv();

            return File(stream, MediaTypeNames.Application.Octet, fileName);
        }

        [Authorized(Role.Admins)]
        [HttpGet("ExportCsvByReportId/{reportId}")]
        public async Task<ActionResult> ExportCsvByReportId(Guid reportId)
        {
            var (stream, fileName) = await _trackingHttpManager.ExportCsvByReportId(reportId);

            return File(stream, MediaTypeNames.Application.Octet, fileName);
        }

        [Authorized(Role.Admins)]
        [HttpGet("ExportCsvByUserId/{userId}")]
        public async Task<ActionResult> ExportCsvByUserId(Guid userId)
        {
            var (stream, fileName) = await _trackingHttpManager.ExportCsvByUserId(userId);

            return File(stream, MediaTypeNames.Application.Octet, fileName);
        }
    }
}
