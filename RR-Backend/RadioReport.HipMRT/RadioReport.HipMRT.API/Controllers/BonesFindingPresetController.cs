using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.HipMRT.Bones.Domain.Enums;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models.Bones;

namespace RadioReport.HipMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/HipMRT/Bones/Presets")]
    [ApiController]
    public class BonesFindingPresetController : ApiControllerBase<IBonesFindingPresetManager, BonesFindingPreset>
    {
        public BonesFindingPresetController(IBonesFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<BonesFindingPreset>> GetByDiagnosis(MassOsteolysisDifferentialDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<BonesFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets() => await Manager.GetAllAvailableDiagnosis();
    }
}