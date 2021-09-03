using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.FeetMRT.Domain.Enums.Bones;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/FeetMRT/Bones/Presets")]
    [ApiController]
    public class BonesFindingPresetController : ApiControllerBase<IBonesFindingPresetManager, BonesFindingPreset>
    {
        public BonesFindingPresetController(IBonesFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<BonesFindingPreset>> GetByDiagnosis(DifferentialDiagnosisType diagnosis, Guid reportId) => 
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<BonesFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(BonesFindingType findingType) =>
            findingType != BonesFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}