using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.API.Controllers;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Models;
using RadioReport.Core.InstituteManager.Domain.Models.InstituteList;

namespace RadioReport.Core.InstituteManager.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("api/Core/InstituteManager/Institutes")]
    public class InstituteController : ApiControllerBase<IInstituteHttpManager, Institute>
    {
        private readonly IInstituteHttpManager _instituteHttpManager;

        public InstituteController(IInstituteHttpManager instituteHttpManager) : base(instituteHttpManager)
        {
            _instituteHttpManager = instituteHttpManager;
        }

        [Authorized(Role.Superadministrator)]
        [HttpGet]
        public override async Task<ActionResult<IEnumerable<Institute>>> Get() => await base.Get();

        [Authorized(Role.Admins)]
        [HttpGet("{id}")]
        public override async Task<ActionResult<Institute>> Get(Guid id) => await _instituteHttpManager.GetByIdAsync(id,
            new[] { nameof(Institute.Address), $"{nameof(Institute.Address)}.{nameof(Feature.Properties)}" });

        [Authorized(Role.Superadministrator)]
        [HttpGet("List")]
        public async Task<ActionResult<InstituteListResponse>> List([FromQuery] InstituteListOptions options) =>
            Ok(await _instituteHttpManager.GetInstitutes(options));

        [Authorized(Role.Superadministrator)]
        [HttpPost]
        public override async Task<ActionResult<Institute>> Add([FromBody] Institute model) => Ok(await Manager.AddAsync(model, true));

        [Authorized(Role.Superadministrator)]
        [HttpPut("{id}")]
        public override async Task<ActionResult<Institute>> Edit(Guid id, [FromBody] Institute model) => await base.Edit(id, model);

        [Authorized(Role.Superadministrator)]
        [HttpPut("Edit")]
        public override async Task<ActionResult<Institute>> Edit([FromBody] Institute model) => await base.Edit(model);

        [Authorized(Role.Superadministrator)]
        [HttpDelete("{id}")]
        public override async Task<ActionResult> Delete(Guid id) => await base.Delete(id);

        [Authorized(Role.Admins)]
        [HttpGet("GetInstituteToken")]
        public async Task<ActionResult<RequestResponse>> GetInstituteToken() => Ok(await _instituteHttpManager.GetInstituteToken());

        [Authorized(Role.Admins)]
        [HttpPut("CreateInstituteToken")]
        public async Task<ActionResult<RequestResponse>> UpdateInstituteToken() => Ok(await _instituteHttpManager.UpdateInstituteToken());

        [Authorized(Role.Admins)]
        [HttpPut("UpdateDuplicateExternalIdentifierAllowed")]
        public async Task<ActionResult<RequestResponse>> UpdateDuplicateExternalIdentifierAllowed([FromQuery] bool duplicateExternalIdentifierAllowed) =>
            Ok(await _instituteHttpManager.UpdateDuplicateMultiExternalIdentifierAllowed(duplicateExternalIdentifierAllowed));

        [Authorized(Role.All)]
        [HttpGet("GetAvailableModules")]
        public async Task<ActionResult<AvailableModulesResponse>> GetAvailableModules() => Ok(await _instituteHttpManager.GetAvailableModules());

        [Authorized(Role.Admins)]
        [HttpPost("UploadInstituteLogo")]
        public async Task<ActionResult<RequestResponse>> UploadInstituteLogo([FromBody] InstituteLogo instituteLogo) =>
            Ok(await _instituteHttpManager.UploadInstituteLogo(instituteLogo));

        [Authorized(Role.Admins)]
        [HttpDelete("DeleteInstituteLogo")]
        public async Task<ActionResult<RequestResponse>> DeleteInstituteLogo() =>
            Ok(await _instituteHttpManager.DeleteInstituteLogo());

        [Authorized(Role.All)]
        [HttpGet("GetInstituteLogo")]
        public async Task<ActionResult<RequestResponse>> GetInstituteLogo() => Ok(await _instituteHttpManager.GetInstituteLogo());

        [Authorized(Role.Admins)]
        [HttpGet("GetHtmlTemplates")]
        public async Task<ActionResult<RequestResponse>> GetHtmlTemplates() =>
            Ok(await _instituteHttpManager.GetHtmlTemplates());

        [Authorized(Role.Admins)]
        [HttpPost("UploadHtmlTemplates")]
        public async Task<ActionResult<RequestResponse>> UploadHtmlTemplates(HtmlTemplates htmlTemplates) =>
            Ok(await _instituteHttpManager.UploadHtmlTemplates(htmlTemplates));

        [Authorized(Role.Admins)]
        [HttpDelete("RemoveHtmlTemplates")]
        public async Task<ActionResult<RequestResponse>> RemoveHtmlTemplates(HtmlTemplates htmlTemplates) =>
            Ok(await _instituteHttpManager.RemoveHtmlTemplates(htmlTemplates));
    }
}
