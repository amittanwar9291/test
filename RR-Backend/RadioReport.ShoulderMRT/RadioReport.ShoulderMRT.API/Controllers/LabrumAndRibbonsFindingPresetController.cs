using System;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.ShoulderMRT.Domain.Enums;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.ShoulderMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/ShoulderMRT/LabrumAndRibbons/Presets")]
    [ApiController]
    public class LabrumAndRibbonsFindingPresetController : ApiControllerBase<ILabrumAndRibbonsFindingPresetManager, LabrumAndRibbonsFindingPreset>
    {
        public LabrumAndRibbonsFindingPresetController(ILabrumAndRibbonsFindingPresetManager presetManager)
            : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<LabrumAndRibbonsFindingPreset>> GetByDiagnosis(DiagnosisType diagnosis, [FromQuery]LabrumAndRibbonsFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));
            
           diagnosisParams.Diagnosis = diagnosis;

            return await Manager.GetByDiagnosisValue(diagnosisParams) ?? new ActionResult<LabrumAndRibbonsFindingPreset>(NotFound());
        }


        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresents()
        {
            return await Manager.GetAllAvailableDiagnosis();
        }
    }
}
