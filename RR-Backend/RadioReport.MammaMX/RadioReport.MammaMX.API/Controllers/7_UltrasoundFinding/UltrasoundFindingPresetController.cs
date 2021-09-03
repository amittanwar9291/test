using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.MammaMX.Domain.Enums.UltrasoundFinding;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/MammaMX/UltrasoundFinding/Presets")]
    [ApiController]
    public class UltrasoundFindingPresetController : ApiControllerBase<IUltrasoundFindingPresetManager, UltrasoundFindingPreset>
    {
        public UltrasoundFindingPresetController(IUltrasoundFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<UltrasoundFindingPreset>> GetByDiagnosis(MassDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<UltrasoundFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(UltrasoundFindingType findingType) =>
            findingType != UltrasoundFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
