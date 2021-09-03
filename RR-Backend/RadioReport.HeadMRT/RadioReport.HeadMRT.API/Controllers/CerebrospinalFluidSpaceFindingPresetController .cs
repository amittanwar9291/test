using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/HeadMRT/CerebrospinalFluidSpace/Presets")]
    [ApiController]
    public class CerebrospinalFluidSpaceFindingPresetController : ApiControllerBase<ICerebrospinalFluidSpaceFindingPresetManager, CerebrospinalFluidSpaceFindingPreset>
    {
        public CerebrospinalFluidSpaceFindingPresetController(ICerebrospinalFluidSpaceFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<CerebrospinalFluidSpaceFindingPreset>> GetByDiagnosis(CerebrospinalMassDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<CerebrospinalFluidSpaceFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(CerebrospinalFluidSpaceFindingType findingType) =>
            findingType != CerebrospinalFluidSpaceFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
