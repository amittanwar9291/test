using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/SpineMRT/SoftTissues/Presets")]
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