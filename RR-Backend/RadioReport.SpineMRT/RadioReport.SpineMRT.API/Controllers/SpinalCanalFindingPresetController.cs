using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.SpineMRT.Domain.Enums.SpinalCanal;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/SpineMRT/SpinalCanal/Presets")]
    [ApiController]
    public class SpinalCanalFindingPresetController : ApiControllerBase<ISpinalCanalFindingPresetManager, SpinalCanalFindingPreset>
    {
        public SpinalCanalFindingPresetController(ISpinalCanalFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<SpinalCanalFindingPreset>> GetByDiagnosis(
            SpinalCanalDifferentialDiagnosisType diagnosis, [FromQuery]SpinalCanalFindingPresetRequest diagnosisParams,
            Guid reportId)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));
            
            diagnosisParams.SpinalCanalDifferentialDiagnosisType = diagnosis;
            return await Manager.GetByDiagnosisValue(diagnosisParams, reportId) ?? new ActionResult<SpinalCanalFindingPreset>(NotFound());
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets([FromQuery]SpinalCanalFindingPresetRequest diagnosisParams) =>
            diagnosisParams != null
                ? await Manager.GetAllAvailableDiagnosis(diagnosisParams)
                : await Manager.GetAllAvailableDiagnosis();
    }
}