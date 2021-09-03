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
    [Route("api/SpineMRT/SacroiliacJoint/Presets")]
    [ApiController]
    public class SacroiliacJointFindingPresetController : ApiControllerBase<ISacroiliacJointFindingPresetManager, SacroiliacJointFindingPreset>
    {
        public SacroiliacJointFindingPresetController(ISacroiliacJointFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<SacroiliacJointFindingPreset>> GetByDiagnosis(SacroiliacJointDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<SacroiliacJointFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(SacroiliacJointFindingType findingType) =>
            findingType != SacroiliacJointFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}