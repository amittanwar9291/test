using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.FeetMRT.Domain.Enums.SoftTissue;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/FeetMRT/SoftTissue/Presets")]
    [ApiController]
    public class SoftTissueFindingPresetController : ApiControllerBase<ISoftTissueFindingPresetManager, SoftTissueFindingPreset>
    {
        public SoftTissueFindingPresetController(ISoftTissueFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<SoftTissueFindingPreset>> GetByDiagnosis(DifferentialDiagnosisType diagnosis, Guid reportId) => 
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<SoftTissueFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(SoftTissueFindingType findingType) =>
            findingType != SoftTissueFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}