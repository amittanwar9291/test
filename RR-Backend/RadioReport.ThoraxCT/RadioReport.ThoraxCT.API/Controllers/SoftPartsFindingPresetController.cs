using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/ThoraxCT/SoftParts/Presets")]
    [ApiController]
    public class SoftPartsFindingPresetController : ApiControllerBase<ISoftPartsFindingPresetManager, SoftPartsFindingPreset>
    {
        public SoftPartsFindingPresetController(ISoftPartsFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(SoftPartsFindingType findingType) =>
            findingType != SoftPartsFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<SoftPartsFindingPreset>> GetByDiagnosis(SoftPartsDiagnosisType diagnosis,
            [FromQuery]SoftPartsFindingPresetRequest diagnosisParams, Guid reportId)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            diagnosisParams.DifferentialDiagnosis = diagnosis;
            return await Manager.GetByDiagnosisValue(diagnosisParams, reportId) ?? new ActionResult<SoftPartsFindingPreset>(NotFound());
        }
    }
}
