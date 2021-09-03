using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.Common.Module.Logic.Managers
{
    public class ReportManager : Manager<Report, IRepository<Report>>, IReportManager
    {
        public ReportManager(IRepository<Report> repository) : base(repository)
        {
        }

        public override async Task<Report> GetByIdAsync(Guid id, Expression<Func<Report, bool>> predicate = null)
        {
            var report       = await base.GetByIdAsync(id, new[] { nameof(Report.Pages), nameof(Report.ReportResults) }, predicate);
            var pageInfoList = report.Pages.OrderBy(info => info.PageNumber).ToList();
            
            report.Pages.Clear();
            report.Pages.AddRange(pageInfoList);
            return report;
        }
            
    }
}
