using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IPageHttpManager<T> where T : PageModelBase<T>, new()
    {
        Task<T> Add(T model);
        Task<T> Edit(Guid id, T model);
        Task<T> GetById(Guid id);
        Task<T> GetByReportId(Guid reportId);
        Task<IEnumerable<RadioReportValue>> GetValuesForReport(Guid id);
        T GetEmpty();
    }
}
