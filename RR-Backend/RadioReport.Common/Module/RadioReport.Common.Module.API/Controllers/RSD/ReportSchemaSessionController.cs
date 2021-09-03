using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.API.Controllers;
using RadioReport.Common.Consts;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Common.Module.API.Controllers.RSD
{
    [ApiVersion( "1.0" )]
    [Route("api/{module}/RSD/ReportSchemaSession")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class ReportSchemaSessionController : ApiControllerBase<IReportSchemaSessionManager, ReportSchemaSession>
    {
        public ReportSchemaSessionController(IReportSchemaSessionManager manager) : base(manager)
        {
        }

        [Authorized(Role.Admins)]
        [HttpPost]
        public override async Task<ActionResult<ReportSchemaSession>> Add([FromBody] ReportSchemaSession model)
        {
            return await base.Add(model);
        }

        [Authorized(Role.Admins)]
        [HttpDelete("{id}")]
        public override async Task<ActionResult> Delete(Guid id)
        {
            return await base.Delete(id);
        }

        [Authorized(Role.Admins)]
        [HttpPut("{id}")]
        public override async Task<ActionResult<ReportSchemaSession>> Edit(Guid id,
            [FromBody] ReportSchemaSession model)
        {
            return await base.Edit(id, model);
        }

        [Authorized(Role.Admins)]
        [HttpPost("Edit")]
        public override async Task<ActionResult<ReportSchemaSession>> Edit([FromBody] ReportSchemaSession model)
        {
            return await base.Edit(model);
        }

        [Authorized(Role.Admins)]
        [HttpGet]
        public override async Task<ActionResult<IEnumerable<ReportSchemaSession>>> Get()
        {
            return await base.Get();
        }

        [Authorized(Role.Admins)]
        [HttpGet("{id}")]
        public override async Task<ActionResult<ReportSchemaSession>> Get(Guid id)
        {
            return await base.Get(id);
        }

        [Authorized(Role.Admins)]
        [HttpGet("ActiveSession/{reportId}")]
        public async Task<ActionResult<ReportSchemaSession>> GetActiveSession(Guid reportId)
        {
            return Ok(await Manager.GetByReportId(reportId));
        }
    }
}
