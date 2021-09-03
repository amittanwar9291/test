using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Core.Tracking.Domain.Models.Statistics;

namespace RadioReport.Core.Tracking.Domain.Interfaces
{
    public interface IStatisticsManager
    {
        List<ReportStatistic> GetReportStatisticsList();
        List<AverageTimeStatistic> GetAverageTimeStatisticsList();
        List<ReportPerRadiologistStatistic> GetReportPerRadiologistStatisticsList();
    }
}
