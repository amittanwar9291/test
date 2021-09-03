using System;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.API.Controllers;

namespace RadioReport.AbdomenMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/AbdomenMRT/GastrointestinalTract/Presets")]
    [ApiController]
    public class GastrointestinalTractFindingPresetController : ApiControllerBase<IGastrointestinalTractFindingPresetManager, GastrointestinalTractFindingPreset>
    {
        public GastrointestinalTractFindingPresetController(IGastrointestinalTractFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<GastrointestinalTractFindingPreset>> GetByDiagnosis(GastrointestinalDifferentialDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<GastrointestinalTractFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(GastrointestinalTractFindingType findingType) =>
            findingType != GastrointestinalTractFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}