using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.API.Controllers;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages.Suggestions;

namespace RadioReport.Common.Module.API.Controllers.RSD
{
    [ApiVersion( "1.0" )]
    [Route("api/{module}/RSD")]
    [ApiController]
    public class RsdController : ApiControllerBase<IReportHttpManager, Report>
    {
        public RsdController(IReportHttpManager reportHttpManager) : base(reportHttpManager)
        {
        }

        [Authorized(Role.All)]
        [HttpGet("GetAvailableFieldIds")]
        public ActionResult<IEnumerable<FieldIdsForPage>> GetAvailableFieldIds()
        {
            return Ok(Manager.GetAvailableFieldIds());
        }

        [Authorized(Role.All)]
        [HttpGet("GetAvailableFindingTypes")]
        public virtual ActionResult<IDictionary<string, IEnumerable<string>>> GetAvailableFindingTypes()
        {
            return Ok(Manager.GetAvailableFindingTypes());
        }

        [Authorized(Role.All)]
        [HttpGet("GetAvailableTranslations")]
        public virtual ActionResult<IDictionary<string, IDictionary<string, string>>> GetAvailableTranslations(string languageCode, string pageName = null)
        {
            return Ok(Manager.GetAvailableTranslations(languageCode, pageName));
        }
    }
}
