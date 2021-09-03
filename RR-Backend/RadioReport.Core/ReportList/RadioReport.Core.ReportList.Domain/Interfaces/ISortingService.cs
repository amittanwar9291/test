using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.ReportList.Domain.Interfaces
{
    public interface ISortingService : IReportListOptionsService
    {
        Task<List<ReportEntry>> SortReports(IQueryable<ReportEntry> queryable, SortOptions sortOptions, int skipCount, int pageSize);
    }
}
