using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.HeadMRT.Domain.Enums.Cortex;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/HeadMRT/Cortex/Presets")]
    [ApiController]
    public class CortexFindingPresetController : ApiControllerBase<ICortexFindingPresetManager, CortexFindingPreset>
    {
        public CortexFindingPresetController(ICortexFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<CortexFindingPreset>> GetByDiagnosis(CortexDifferentialDiagnosisType diagnosis,
            [FromQuery] CortexFindingPresetRequest diagnosisParams, Guid reportId)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            diagnosisParams.DifferentialDiagnosisType = diagnosis;
            return await Manager.GetByDiagnosisValue(diagnosisParams, reportId) ?? new ActionResult<CortexFindingPreset>(NotFound());
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets([FromQuery] CortexFindingPresetRequest diagnosisParams) =>
            diagnosisParams != null
                ? await Manager.GetAllAvailableDiagnosis(diagnosisParams)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
