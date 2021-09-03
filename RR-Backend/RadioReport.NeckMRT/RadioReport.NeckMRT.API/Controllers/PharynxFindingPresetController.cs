using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.NeckMRT.Domain.Enums.Pharynx;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/NeckMRT/Pharynx/Presets")]
    [ApiController]
    public class PharynxFindingPresetController : ApiControllerBase<IPharynxFindingPresetManager, PharynxFindingPreset>
    {
        public PharynxFindingPresetController(IPharynxFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<PharynxFindingPreset>> GetByDiagnosis(DifferentialDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<PharynxFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(PharynxFindingType findingType) =>
            findingType != PharynxFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
