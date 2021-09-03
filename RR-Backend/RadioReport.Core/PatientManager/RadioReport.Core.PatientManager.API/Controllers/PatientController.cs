using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Core.PatientManager.Domain.Interfaces;

namespace RadioReport.Core.PatientManager.API.Controllers
{
    [ApiVersion("1.0")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("api/Core/PatientManager")]
    public class PatientController : ControllerBase
    {
        private readonly IPatientHttpManager _patientHttpManager;

        public PatientController(IPatientHttpManager patientHttpManager)
        {
            _patientHttpManager = patientHttpManager;
        }

        [Authorized(Role.AllButViewer)]
        [HttpPost]
        public async Task<ActionResult<PatientDto>> Add(PatientDto dto) => Ok(await _patientHttpManager.AddAsync(dto));

        [Authorized(Role.All)]
        [HttpGet("{id}")]
        public async Task<ActionResult<PatientDto>> Get(Guid id) => Ok(await _patientHttpManager.GetByIdAsync(id));

        [Authorized(Role.All)]
        [HttpGet("GetBySubStringOfFirstName/{subString}")]
        public async Task<ActionResult<List<PatientDto>>> GetBySubStringOfFirstName(string subString) =>
            Ok(await _patientHttpManager.GetBySubStringOfFirstName(subString));

        [Authorized(Role.All)]
        [HttpGet("GetBySubStringOfLastName/{subString}")]
        public async Task<ActionResult<List<PatientDto>>> GetBySubStringOfLastName(string subString) =>
            Ok(await _patientHttpManager.GetBySubStringOfLastName(subString));

        [Authorized(Role.Superadministrator)]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(Guid id)
        {
            await _patientHttpManager.RemoveAsync(id);

            return Ok();
        }
    }
}
