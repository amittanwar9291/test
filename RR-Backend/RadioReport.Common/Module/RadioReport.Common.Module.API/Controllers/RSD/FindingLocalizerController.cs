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
    [Route("api/{module}/RSD/Localizers")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class FindingLocalizerController : ApiControllerBase<IFindingLocalizerManager, FindingLocalizer>
    {
        public FindingLocalizerController(IFindingLocalizerManager findingLocalizerManager) : base(findingLocalizerManager)
        {
        }

        [Authorized(Role.AllButViewer)]
        [HttpPost]
        public override async Task<ActionResult<FindingLocalizer>> Add([FromBody] FindingLocalizer model)
        {
            return await base.Add(model);
        }

        [Authorized(Role.AllButViewer)]
        [HttpDelete("{id}")]
        public override async Task<ActionResult> Delete(Guid id)
        {
            return await base.Delete(id);
        }

        [Authorized(Role.AllButViewer)]
        [HttpPut("{id}")]
        public override async Task<ActionResult<FindingLocalizer>> Edit(Guid id, [FromBody] FindingLocalizer model)
        {
            return await base.Edit(id, model);
        }

        [Authorized(Role.AllButViewer)]
        [HttpPost("Edit")]
        public override async Task<ActionResult<FindingLocalizer>> Edit([FromBody] FindingLocalizer model)
        {
            return await base.Edit(model);
        }

        [Authorized(Role.All)]
        [HttpGet]
        public override async Task<ActionResult<IEnumerable<FindingLocalizer>>> Get()
        {
            return await base.Get();
        }

        [Authorized(Role.All)]
        [HttpGet("{id}")]
        public override async Task<ActionResult<FindingLocalizer>> Get(Guid id)
        {
            return await base.Get(id);
        }

        [HttpGet("GetEmpty")]
        public static ActionResult<FindingLocalizer> GetEmpty()
        {
            return new FindingLocalizer
            {
                Id = Guid.Empty,
                Code = "mam_m_000000:L000",
                Content = "<svg></svg>",
                Mapping = ""
            };
        }
    }
}
