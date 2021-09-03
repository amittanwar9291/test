using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.CardioMRT.Domain.Enums.SpatialRequirement;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.API.Controllers;

namespace RadioReport.CardioMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/CardioMRT/SpatialRequirement/Presets")]
    [ApiController]
    public class SpatialRequirementFindingPresetController: ApiControllerBase<ISpatialRequirementFindingPresetManager, SpatialRequirementFindingPreset>
    {
        public SpatialRequirementFindingPresetController(ISpatialRequirementFindingPresetManager presetManager) : base(presetManager)
        {
        }
        
        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<SpatialRequirementFindingPreset>> GetByDiagnosis(SpatialRequirementDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<SpatialRequirementFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets() => await Manager.GetAllAvailableDiagnosis();
    }
}
