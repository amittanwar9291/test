using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.AbdomenMRT.Domain.Enums.Liver;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.API.Controllers;

namespace RadioReport.AbdomenMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/AbdomenMRT/Liver/Presets")]
    [ApiController]
    public class LiverFindingPresetController : ApiControllerBase<ILiverFindingPresetManager, LiverFindingPreset>
    {
        public LiverFindingPresetController(ILiverFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<LiverFindingPreset>> GetByDiagnosis(LiverDifferentialDiagnosisType diagnosis, Guid reportId) => 
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<LiverFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(LiverFindingType findingType) =>
            findingType != LiverFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}