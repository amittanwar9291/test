using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.PelvisMRT.Domain.Enums.MaleGender;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/PelvisMRT/MaleGender/Presets")]
    [ApiController]
    public class MaleGenderFindingPresetController : ApiControllerBase<IMaleGenderFindingPresetManager, MaleGenderFindingPreset>
    {
        public MaleGenderFindingPresetController(IMaleGenderFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<MaleGenderFindingPreset>> GetByDiagnosis(MaleGenderDiagnosisType diagnosis,
            [FromQuery] MaleGenderFindingPresetRequest diagnosisParams, Guid reportId) 
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            diagnosisParams.DifferentialDiagnosisType = diagnosis;
            return await Manager.GetByDiagnosisValue(diagnosisParams, reportId) ?? new ActionResult<MaleGenderFindingPreset>(NotFound());
        }
            
        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets([FromQuery] MaleGenderFindingPresetRequest diagnosisParams) =>
            diagnosisParams != null
                ? await Manager.GetAllAvailableDiagnosis(diagnosisParams)
                : await Manager.GetAllAvailableDiagnosis();
    }
}