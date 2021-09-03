using RadioReport.Common.Logic.Managers;
using RadioReport.Core.ReportList.Domain.Interfaces;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.ReportList.Domain.Managers
{
    public class ReportEntryManager : Manager<ReportEntry, IReportEntryRepository>, IReportEntryManager
    {
        public ReportEntryManager(IReportEntryRepository repository) : base(repository)
        {
        }
    }
}
