using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.ElbowMRT.Domain.Enums.Bones;
using RadioReport.ElbowMRT.Domain.Interfaces;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/ElbowMRT/Bones/Presets")]
    [ApiController]
    public class BonesFindingPresetController : ApiControllerBase<IBonesFindingPresetManager, BonesFindingPreset>
    {
        public BonesFindingPresetController(IBonesFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<BonesFindingPreset>> GetByDiagnosis(DiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<BonesFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(BonesFindingType findingType) =>
            findingType != BonesFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
