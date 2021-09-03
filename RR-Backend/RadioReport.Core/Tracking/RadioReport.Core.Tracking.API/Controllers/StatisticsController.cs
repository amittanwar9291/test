using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.API.Attributes;
using RadioReport.Common.Consts;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Models.Statistics;

namespace RadioReport.Core.Tracking.API.Controllers
{
    [ApiVersion("1.0")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("api/Core/Tracking/Statistics")]
    public class StatisticsController : ControllerBase
    {
        private readonly IStatisticsManager _statisticsManager;

        public StatisticsController(IStatisticsManager statisticsManager)
        {
            _statisticsManager = statisticsManager;
        }

        [Authorized(Role.Admins)]
        [HttpGet("Reports")]
        public ActionResult<IEnumerable<ReportStatistic>> ReportsStatistics() => _statisticsManager.GetReportStatisticsList();

        [Authorized(Role.Admins)]
        [HttpGet("AverageTimes")]
        public ActionResult<IEnumerable<AverageTimeStatistic>> AverageTimesStatistics() => _statisticsManager.GetAverageTimeStatisticsList();

        [Authorized(Role.Admins)]
        [HttpGet("ReportsPerRadiologist")]
        public ActionResult<IEnumerable<ReportPerRadiologistStatistic>> ReportsPerRadiologistStatistics() => _statisticsManager.GetReportPerRadiologistStatisticsList();
    }
}
