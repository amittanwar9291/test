using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IPageRepository<T> : IRepository<T> where T : PageModelBase
    {
        Task<T> GetByReportIdAsync(Guid reportId);
        Task<T> GetByReportIdAsync(Guid reportId, string[] includes);
        void RemoveByReportId(Guid reportId);
    }
}
