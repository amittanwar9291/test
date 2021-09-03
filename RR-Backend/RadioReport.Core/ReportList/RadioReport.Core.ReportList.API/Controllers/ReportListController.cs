using Microsoft.AspNetCore.Mvc;
using RadioReport.Core.ReportList.Domain.Interfaces;
using RadioReport.Core.ReportList.Domain.Models;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.API.Controllers;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.ReportList;

namespace RadioReport.Core.ReportList.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/Core/ReportList")]
    [ApiController]
    public class ReportListController : ApiControllerBase<IReportListHttpManager, ReportEntry>
    {
        private readonly IReportListHttpManager _reportListHttpManager;

        public ReportListController(IReportListHttpManager reportListHttpManager) : base(reportListHttpManager)
        {
            _reportListHttpManager = reportListHttpManager;
        }

        [Authorized(Role.All)]
        [HttpPost("Patient")]
        public async Task<ActionResult<ReportListResponse>> GetWithPatient([FromBody] ReportListOptions options) =>
            Ok(await _reportListHttpManager.GetWithPatient(options));

        [Authorized(Role.Admins)]
        [HttpGet("ExportCsvReportlist")]
        public async Task<ActionResult> ExportCsvReportList()
        {
            var (stream, fileName) = await _reportListHttpManager.ExportCsvReportList();

            return File(stream, MediaTypeNames.Application.Octet, fileName);
        }
    }
}
