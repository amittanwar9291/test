using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;
using RadioReport.KneeMRT.SoftParts.Domain.Enums;

namespace RadioReport.KneeMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/KneeMRT/SoftParts/Presets")]
    [ApiController]
    public class SoftPartsFindingPresetController : ApiControllerBase<ISoftPartsFindingPresetManager, SoftPartsFindingPreset>
    {
        public SoftPartsFindingPresetController(ISoftPartsFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<SoftPartsFindingPreset>> GetByDiagnosis(SoftPartsDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<SoftPartsFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(SoftPartsFindingType findingType) =>
            findingType != SoftPartsFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}