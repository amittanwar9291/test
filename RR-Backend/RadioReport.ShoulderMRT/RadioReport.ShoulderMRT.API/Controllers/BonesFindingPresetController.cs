using System;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.ShoulderMRT.Domain.Enums;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.ShoulderMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/ShoulderMRT/Bones/Presets")]
    [ApiController]
    public class BonesFindingPresetController : ApiControllerBase<IBonesFindingPresetManager, BonesFindingPreset>
    {
        public BonesFindingPresetController(IBonesFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<BonesFindingPreset>> GetByDiagnosis(TumorDifferentialDiagnosis diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<BonesFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresents()
        {
            return await Manager.GetAllAvailableDiagnosis();
        }

    }
}
