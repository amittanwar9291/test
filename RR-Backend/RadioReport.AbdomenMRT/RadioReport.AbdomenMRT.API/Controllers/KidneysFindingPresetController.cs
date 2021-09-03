using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.API.Controllers;

namespace RadioReport.AbdomenMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/AbdomenMRT/Kidneys/Presets")]
    [ApiController]
    public class KidneysFindingPresetController : ApiControllerBase<IKidneysFindingPresetManager, KidneysFindingPreset>
    {
        public KidneysFindingPresetController(IKidneysFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<KidneysFindingPreset>> GetByDiagnosis(KidneysDifferentialDiagnosisType diagnosis, Guid reportId) => 
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<KidneysFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(KidneysFindingType findingType) =>
            findingType != KidneysFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}