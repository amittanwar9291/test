using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.NeckMRT.Domain.Enums.Larynx;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/NeckMRT/Larynx/Presets")]
    [ApiController]
    public class LarynxFindingPresetController : ApiControllerBase<ILarynxFindingPresetManager, LarynxFindingPreset>
    {
        public LarynxFindingPresetController(ILarynxFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<LarynxFindingPreset>> GetByDiagnosis(DifferentialDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<LarynxFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(LarynxFindingType findingType) =>
            findingType != LarynxFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
