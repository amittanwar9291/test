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
    [Route("api/ThoraxCT/Mediastinum/Presets")]
    [ApiController]
    public class MediastinumFindingPresetController : ApiControllerBase<IMediastinumFindingPresetManager, MediastinumFindingPreset>
    {
        public MediastinumFindingPresetController(IMediastinumFindingPresetManager presetManager) : base(presetManager)
        {
        }

        [HttpGet("Diagnosis")]
        public async Task<IEnumerable<string>> GetDDFromPresets(MediastinumFindingType findingType) =>
            findingType != MediastinumFindingType.None
                ? await Manager.GetAllAvailableDiagnosis(findingType)
                : await Manager.GetAllAvailableDiagnosis();

        [HttpGet("Diagnosis/{diagnosis}")]
        public async Task<ActionResult<MediastinumFindingPreset>> GetByDiagnosis(MediastinumDiagnosisType diagnosis, Guid reportId) =>
            await Manager.GetByDiagnosisValue(diagnosis, reportId) ?? new ActionResult<MediastinumFindingPreset>(NotFound());
    }
}
