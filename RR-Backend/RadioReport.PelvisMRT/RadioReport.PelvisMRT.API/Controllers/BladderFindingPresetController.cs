using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.PelvisMRT.Domain.Enums.Bladder;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/PelvisMRT/Bladder/Presets")]
    [ApiController]
    public class BladderFindingPresetController : ApiControllerBase<IBladderFindingPresetManager, BladderFindingPreset>
    {
        public BladderFindingPresetController(IBladderFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<BladderFindingPreset>> GetByDiagnosis(BladderDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<BladderFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets() => await Manager.GetAllAvailableDiagnosis();
    }
}