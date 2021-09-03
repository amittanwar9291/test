using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.HeadMRT.Domain.Enums.SellarRegion;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/HeadMRT/SellarRegion/Presets")]
    [ApiController]
    public class SellarRegionFindingPresetController : ApiControllerBase<ISellarRegionFindingPresetManager, SellarRegionFindingPreset>
    {
        public SellarRegionFindingPresetController(ISellarRegionFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(SellarRegionFindingType findingType) =>
            findingType != SellarRegionFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<SellarRegionFindingPreset>> GetByDiagnosis(SellarRegionDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<SellarRegionFindingPreset>(NotFound());
    }
}
