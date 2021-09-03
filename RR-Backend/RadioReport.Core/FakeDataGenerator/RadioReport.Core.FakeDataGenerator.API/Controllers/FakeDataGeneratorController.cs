using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Core.FakeDataGenerator.Domain.Interfaces;
using RadioReport.Core.FakeDataGenerator.Domain.Models;

namespace RadioReport.Core.FakeDataGenerator.API.Controllers
{
    [ApiVersion( "1.0" )]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("api/Core/FakeDataGenerator")]
    public class FakeDataGeneratorController : ControllerBase
    {
        private readonly IFakeDataManager _fakeDataManager;

        public FakeDataGeneratorController(IFakeDataManager fakeDataManager)
        {
            _fakeDataManager = fakeDataManager;
        }

        [Authorized(Role.AllButViewer)]
        [HttpPost("Report")]
        public async Task<ActionResult<Report>> CreateFakeReport(CreateFakeReportRequest request) =>
            await _fakeDataManager.CreateFakeReport(request);

        [Authorized(Role.Superadministrator)]
        [HttpPost("Reports")]
        public async Task<ActionResult<int>> CreateFakeReports(CreateFakeReportsRequest request) =>
            await _fakeDataManager.CreateFakeReports(request);

        [Authorized(Role.Superadministrator)]
        [HttpPost("Patient/{instituteId?}")]
        public async Task<ActionResult<Patient>> CreateFakePatient([FromRoute] Guid? instituteId) =>
            await _fakeDataManager.CreateFakePatient(instituteId);

        [Authorized(Role.Superadministrator)]
        [HttpPost("Patients")]
        public async Task<ActionResult<int>> CreateFakePatients(CreateFakePatientsRequest request) =>
            await _fakeDataManager.CreateFakePatients(request);

        [Authorized(Role.Superadministrator)]
        [HttpPost("ReportListEntries/{amount}")]
        public async Task<ActionResult<int>> CreateFakeReportListEntries(int amount) =>
            await _fakeDataManager.CreateFakeReportListEntries(amount);
    }
}
