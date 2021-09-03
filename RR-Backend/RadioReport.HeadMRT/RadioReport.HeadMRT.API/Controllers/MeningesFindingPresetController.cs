using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.HeadMRT.Domain.Enums.Meninges;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/HeadMRT/Meninges/Presets")]
    [ApiController]
    public class MeningesFindingPresetController : ApiControllerBase<IMeningesFindingPresetManager, MeningesFindingPreset>
    {
        public MeningesFindingPresetController(IMeningesFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<MeningesFindingPreset>> GetByDiagnosis(MeningesMassDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<MeningesFindingPreset>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(MeningesFindingType findingType) =>
            findingType != MeningesFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();
    }
}
