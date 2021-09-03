using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments;

namespace RadioReport.KneeMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/HipMRT/CapsuleAndLigaments/Presets")]
    [ApiController]
    public class CapsuleAndLigamentsFindingPresetController : ApiControllerBase<ICapsuleAndLigamentsFindingPresetManager, CapsuleAndLigamentsFindingPreset>
    {
        public CapsuleAndLigamentsFindingPresetController(ICapsuleAndLigamentsFindingPresetManager presetManager) : base(presetManager)
        {
        }
        
        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<CapsuleAndLigamentsFindingPreset>> GetByDiagnosis(SynoviaDifferentialDiagnosis diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<CapsuleAndLigamentsFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets() => await Manager.GetAllAvailableDiagnosis();
    }
}