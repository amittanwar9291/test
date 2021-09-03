using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Models;
using RadioReport.Core.Tracking.Domain.Models.Statistics;

namespace RadioReport.Core.Tracking.Domain.Managers
{
    public class StatisticsManager : IStatisticsManager
    {
        private readonly ITrackingRepository _trackingRepository;

        public StatisticsManager(ITrackingRepository trackingRepository)
        {
            _trackingRepository = trackingRepository;
        }

        public List<ReportStatistic> GetReportStatisticsList() => _trackingRepository.GetByProcedureReportStatisticList();

        public List<AverageTimeStatistic> GetAverageTimeStatisticsList() => _trackingRepository.GetByProcedureAverageTimeStatisticList();

        public List<ReportPerRadiologistStatistic> GetReportPerRadiologistStatisticsList() => _trackingRepository.GetByProcedureReportPerRadiologistStatisticList();
    }
}
