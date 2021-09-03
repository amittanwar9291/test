using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/ThoraxCT/LungParenchyma/Presets")]
    [ApiController]
    public class LungParenchymaFindingPresetController : ApiControllerBase<ILungParenchymaFindingPresetManager, LungParenchymaFindingPreset>
    {
        public LungParenchymaFindingPresetController(ILungParenchymaFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(LungParenchymaFindingType findingType) =>
            findingType != LungParenchymaFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<LungParenchymaFindingPreset>> GetByDiagnosis(LungParenchymaDiagnosisType diagnosis,
            [FromQuery]LungParenchymaFindingPresetRequest diagnosisParams, Guid reportId)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            diagnosisParams.MainCharacteristicsDifferentialDiagnosis01 = diagnosis;
            return await Manager.GetByDiagnosisValue(diagnosisParams, reportId) ?? new ActionResult<LungParenchymaFindingPreset>(NotFound());
        }
    }
}
