using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.AbdomenMRT.Domain.Enums.Spleen;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.API.Controllers;

namespace RadioReport.AbdomenMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/AbdomenMRT/Spleen/Presets")]
    [ApiController]
    public class SpleenFindingPresetController : ApiControllerBase<ISpleenFindingPresetManager, SpleenFindingPreset>
    {
        public SpleenFindingPresetController(ISpleenFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<SpleenFindingPreset>> GetByDiagnosis(SpleenDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<SpleenFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(SpleenFindingType findingType) =>
            findingType != SpleenFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}