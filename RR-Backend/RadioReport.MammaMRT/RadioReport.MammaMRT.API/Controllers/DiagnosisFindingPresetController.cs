using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Controllers;
using RadioReport.MammaMRT.Domain.Enums;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;


namespace RadioReport.MammaMRT.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Route("api/MammaMRT/Diagnosis/Presets")]
    [ApiController]
    public class DiagnosisFindingPresetController : ApiControllerBase<IFindingTemplatesManager, DiagnosisFindingTemplate>
    {
        public DiagnosisFindingPresetController(IFindingTemplatesManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<DiagnosisFindingTemplate>> GetByDiagnosis(DiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<DiagnosisFindingTemplate>(NotFound());

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets() => await Manager.GetAllAvailableDiagnosis();
    }
}