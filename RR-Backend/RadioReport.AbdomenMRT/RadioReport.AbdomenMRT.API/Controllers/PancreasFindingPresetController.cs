using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.AbdomenMRT.Domain.Enums.Pancreas;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.API.Controllers;

namespace RadioReport.AbdomenMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/AbdomenMRT/Pancreas/Presets")]
    [ApiController]
    public class PancreasFindingPresetController : ApiControllerBase<IPancreasFindingPresetManager, PancreasFindingPreset>
    {
        public PancreasFindingPresetController(IPancreasFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<PancreasFindingPreset>> GetByDiagnosis(MassDifferentialDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<PancreasFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(PancreasFindingType findingType) =>
            findingType != PancreasFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}