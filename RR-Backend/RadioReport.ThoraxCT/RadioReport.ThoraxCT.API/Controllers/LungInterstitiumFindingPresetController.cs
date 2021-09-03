using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/ThoraxCT/LungInterstitium/Presets")]
    [ApiController]
    public class LungInterstitiumFindingPresetController : ApiControllerBase<ILungInterstitiumFindingPresetManager, LungInterstitiumFindingPreset>
    {
        public LungInterstitiumFindingPresetController(ILungInterstitiumFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets() =>
            await Manager.GetAllAvailableDiagnosis();

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<IEnumerable<LungInterstitiumFindingPreset>>> GetByDiagnosis(LungInterstitiumDiagnosisType diagnosis, Guid reportId)
        {
            var presets = await Manager.GetByDiagnosisValue(diagnosis, reportId);
            
            if (!presets?.Any() ?? true)
            {
                return new ActionResult<IEnumerable<LungInterstitiumFindingPreset>>(NotFound());
            }

            return Ok(presets);
        }
    }
}
