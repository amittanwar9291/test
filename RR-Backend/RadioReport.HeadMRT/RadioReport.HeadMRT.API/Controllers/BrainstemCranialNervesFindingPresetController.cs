using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/HeadMRT/BrainstemCranialNerves/Presets")]
    [ApiController]
    public class BrainstemCranialNervesFindingPresetController : ApiControllerBase<IBrainstemCranialNervesFindingPresetManager, BrainstemCranialNervesFindingPreset>
    {
        public BrainstemCranialNervesFindingPresetController(IBrainstemCranialNervesFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<BrainstemCranialNervesFindingPreset>> GetByDiagnosis(BrainstemCranialNervesDiagnosisType diagnosis, 
            [FromQuery] BrainstemCranialNervesFindingPresetRequest diagnosisParams, Guid reportId)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            diagnosisParams.DifferentialDiagnosisType = diagnosis;
            return await Manager.GetByDiagnosisValue(diagnosisParams, reportId) ?? new ActionResult<BrainstemCranialNervesFindingPreset>(NotFound());
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets([FromQuery] BrainstemCranialNervesFindingPresetRequest diagnosisParams) =>
            diagnosisParams != null
                ? await Manager.GetAllAvailableDiagnosis(diagnosisParams)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
