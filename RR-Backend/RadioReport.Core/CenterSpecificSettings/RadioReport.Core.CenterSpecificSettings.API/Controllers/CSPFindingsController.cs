using Microsoft.AspNetCore.Mvc;
using RadioReport.Core.CenterSpecificSettings.Domain.Enums;
using RadioReport.Core.CenterSpecificSettings.Domain.Interfaces;
using RadioReport.Core.CenterSpecificSettings.Domain.Models;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.Consts;
using System.Collections.Generic;

namespace RadioReport.Core.CenterSpecificSettings.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("api/Core/CenterSpecificSettings/CSPFindings")]
    public class CSPFindingsController : ControllerBase

    {
        private readonly ICSPFindingManager manager;

        public CSPFindingsController(ICSPFindingManager manager)
        {
            this.manager = manager;
        }

        // GET api/v1/Core/CSPFindings
        [HttpGet]
        public async Task<IEnumerable<CSPFinding>> Get() => await manager.GetAll();

        // GET api/v1/Core/CSPFindings/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<CSPFinding>> Get(Guid id) => await manager.Get(id);

        // GET api/v1/Core/CSPFindings/type/{type}
        [HttpGet("type/{type}")]
        public async Task<ActionResult<CSPFinding>> Get(CSPFindingType type) => await manager.Get(type);

        // PUT api/v1/Core/CSPFindings/{id}
        [Authorized(Role.AllButViewer)]
        [HttpPut("{id}")]
        public async Task<ActionResult<CSPFinding>> Edit(Guid id, [FromBody] CSPFinding model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            model.Id = id;
            return await manager.Update(model);
        }

        //GET api/v1/Core/CSPFindings/IsAlive
        [HttpGet("IsAlive")]
        public bool IsAlive() => true;

        // GET api/v1/Core/CSPFindings/GetEmpty
        [HttpGet("GetEmpty")]
        public ActionResult<CSPFinding> GetEmpty() => new CSPFinding();
    }
}
