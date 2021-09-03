using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.API.Controllers;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.API.Filters;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models;

namespace RadioReport.Common.Module.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/{module}/Report")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ReportSessionFilter]
    [ApiController]
    public class ReportController : ApiControllerBase<IReportHttpManager, Report>
    {
        public ReportController(IReportHttpManager reportHttpManager) : base(reportHttpManager)
        {
        }

        [Authorized(Role.AllButViewer)]
        [HttpPost]
        public override async Task<ActionResult<Report>> Add([FromBody] Report model) => Ok(await Manager.AddAsync(model));

        [Authorized(Role.AllButViewer)]
        [HttpPost("ApproveReportResult")]
        public async Task<ActionResult<ReportResult>> ApproveReportResult(ReportResult reportResult) => Ok(await Manager.ApproveReportResult(reportResult));

        [Authorized(Role.All)]
        [HttpGet("{id}")]
        public override async Task<ActionResult<Report>> Get(Guid id) => Ok(await Manager.GetByIdAsync(id));

        [Authorized(Role.All)]
        [HttpGet("GetReportResult")]
        public async Task<ActionResult<ReportResult>> GetReportResult(Guid reportId, string reportTypeName) =>
            Ok(await Manager.GetExistingReportResult(reportId, reportTypeName));

        [Authorized(Role.All)]
        [HttpGet("GetTextReport")]
        public async Task<ActionResult<ReportResult>> GetTextReport(
            string reportTypeName,
            string languageCode,
            LocalizerType localizerType,
            bool isReferenceImage,
            bool isIcd10,
            bool localizersBackground,
            Guid reportId
        )
        {
            var parameter = new ReportTextGenerationParams
            {
                ReportId = reportId,
                ReportTypeName = reportTypeName,
                IsIcd10 = isIcd10,
                LanguageCode = languageCode,
                LocalizerBackground = localizersBackground,
                LocalizerType = localizerType,
                IsReferenceImage = isReferenceImage
            };

            return Ok(await Manager.GenerateTextReport(parameter));
        }

        [Authorized(Role.All)]
        [HttpGet("GetWithPatient/{id}")]
        public async Task<ActionResult<ReportPatientResponse>> GetWithPatient(Guid id) => Ok(await Manager.GetWithPatient(id));

        [Authorized(Role.AllButViewer)]
        [HttpPost("ImportReport")]
        public async Task<ActionResult<RequestResponse>> ImportReport([FromBody] ImportReportRequest request)
        {
            if (request is null) return BadRequest();

            return Ok(await Manager.ImportReport(request));
        }

        [Authorized(Role.AllButViewer)]
        [HttpPut("MarkPageAsModified")]
        public async Task<ActionResult<RequestResponse>> MarkPageAsModified(Guid reportId, Guid pageId)
        {
            await Manager.MarkPageAsModified(reportId, pageId);

            return Ok();
        }

        [Authorized(Role.AllButViewer)]
        [HttpPost("UpdateReportResult")]
        public async Task<ActionResult<ReportResult>> UpdateReportResult(ReportResult reportResult) => Ok(await Manager.UpdateReportResult(reportResult));

        [Authorized(Role.AllButViewer)]
        [HttpPost("{id}/{status}")]
        public async Task<ActionResult<Report>> UpdateStatus(Guid id, ReportStatus status) => Ok(await Manager.UpdateStatus(id, status));
    }
}
