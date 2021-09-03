using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.MammaMX.Domain.Enums.MammographyFinding;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/MammaMX/MammographyFinding/Presets")]
    [ApiController]
    public class MammographyFindingPresetController : ApiControllerBase<IMammographyFindingPresetManager, MammographyFindingPreset>
    {
        public MammographyFindingPresetController(IMammographyFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<MammographyFindingPreset>> GetByDiagnosis(DiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<MammographyFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(MammographyFindingType findingType) =>
            findingType != MammographyFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
