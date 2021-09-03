using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.SpineCT.Domain.Enums.SoftTissues;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.SpineCT.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/SpineCT/SoftTissues/Presets")]
    [ApiController]
    public class SoftTissuesFindingPresetController : ApiControllerBase<ISoftTissuesFindingPresetManager, SoftTissuesFindingPreset>
    {
        public SoftTissuesFindingPresetController(ISoftTissuesFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<SoftTissuesFindingPreset>> GetByDiagnosis(SoftTissuesDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<SoftTissuesFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(SoftTissuesFindingType findingType) =>
            findingType != SoftTissuesFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
