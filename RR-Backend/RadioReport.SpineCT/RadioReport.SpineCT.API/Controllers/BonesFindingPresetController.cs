using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.SpineCT.Domain.Enums.Bones;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.SpineCT.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/SpineCT/Bones/Presets")]
    [ApiController]
    public class BonesFindingPresetController : ApiControllerBase<IBonesFindingPresetManager, BonesFindingPreset>
    {
        public BonesFindingPresetController(IBonesFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<BonesFindingPreset>> GetByDiagnosis(BonesDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<BonesFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(BonesFindingType findingType) =>
            findingType != BonesFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
