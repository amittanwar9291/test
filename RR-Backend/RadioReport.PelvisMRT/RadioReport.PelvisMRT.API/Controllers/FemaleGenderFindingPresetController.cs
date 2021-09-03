using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.PelvisMRT.Domain.Enums.FemaleGender;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/PelvisMRT/FemaleGender/Presets")]
    [ApiController]
    public class FemaleGenderFindingPresetController : ApiControllerBase<IFemaleGenderFindingPresetManager, FemaleGenderFindingPreset>
    {
        public FemaleGenderFindingPresetController(IFemaleGenderFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(FemaleGenderFindingType findingType) =>
            findingType != FemaleGenderFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<FemaleGenderFindingPreset>> GetByDiagnosis(FemaleGenderDiagnosisType diagnosis,
            [FromQuery]FemaleGenderFindingPresetRequest diagnosisParams, Guid reportId)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            diagnosisParams.DifferentialDiagnosis = diagnosis;
            return await Manager.GetByDiagnosisValue(diagnosisParams, reportId) ?? new ActionResult<FemaleGenderFindingPreset>(NotFound());
        }
    }
}