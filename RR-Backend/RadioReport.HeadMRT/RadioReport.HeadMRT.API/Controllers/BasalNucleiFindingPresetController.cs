using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.HeadMRT.Domain.Enums.BasalNuclei;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/HeadMRT/BasalNuclei/Presets")]
    [ApiController]
    public class BasalNucleiFindingPresetController : ApiControllerBase<IBasalNucleiFindingPresetManager, BasalNucleiFindingPreset>
    {
        public BasalNucleiFindingPresetController(IBasalNucleiFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<BasalNucleiFindingPreset>> GetByDiagnosis(BasalNucleiDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<BasalNucleiFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(BasalNucleiFindingType findingType) =>
            findingType != BasalNucleiFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
