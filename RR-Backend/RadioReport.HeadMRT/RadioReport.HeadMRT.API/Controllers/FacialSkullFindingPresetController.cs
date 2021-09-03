using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/HeadMRT/FacialSkull/Presets")]
    [ApiController]
    public class FacialSkullFindingPresetController : ApiControllerBase<IFacialSkullFindingPresetManager, FacialSkullFindingPreset>
    {
        public FacialSkullFindingPresetController(IFacialSkullFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<FacialSkullFindingPreset>> GetByDiagnosis(string diagnosis,
            [FromQuery] FacialSkullFindingPresetRequest diagnosisParams, Guid reportId)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            diagnosisParams.DifferentialDiagnosisType = diagnosis;
            return await Manager.GetByDiagnosisValue(diagnosisParams, reportId) ?? new ActionResult<FacialSkullFindingPreset>(NotFound());
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets([FromQuery] FacialSkullFindingPresetRequest diagnosisParams) =>
            diagnosisParams != null
                ? await Manager.GetAllAvailableDiagnosis(diagnosisParams)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
