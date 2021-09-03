using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.ElbowMRT.Domain.Enums;
using RadioReport.ElbowMRT.Domain.Interfaces;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/ElbowMRT/SoftTissue/Presets")]
    [ApiController]
    public class SoftTissueFindingPresetController : ApiControllerBase<ISoftTissueFindingPresetManager, SoftTissueFindingPreset>
    {
        public SoftTissueFindingPresetController(ISoftTissueFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(SoftTissueFindingType findingType) =>
            findingType != SoftTissueFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<SoftTissueFindingPreset>> GetByDiagnosis(SoftTissueDifferentialDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<SoftTissueFindingPreset>(NotFound());
    }
}
