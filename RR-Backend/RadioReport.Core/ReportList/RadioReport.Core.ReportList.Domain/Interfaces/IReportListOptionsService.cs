using RadioReport.Common.Logic.Models.ReportList;

namespace RadioReport.Core.ReportList.Domain.Interfaces
{
    public interface IReportListOptionsService
    {
        void SetDefaultsIfEmpty(ReportListOptions options);
    }
}
