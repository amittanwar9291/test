using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IPageManager
    {
        string PageTypeName { get; }
        Type PageType { get; }
        Task<IEnumerable<RadioReportValue>> GetValuesForReport(Guid id);
        IDictionary<string, HashSet<string>> GetAvailableFieldIds(byte pageNumber);
        IEnumerable<string> GetAvailableFindingTypes();
        Task AddPageInstance(object pageInstance);
    }

    public interface IPageManager<T> : IPageManager, IManager<T> where T : PageModelBase
    {
        Task<T> AddWithReportSessionAsync(T model);
        Task<T> UpdateWithReportSessionAsync(Guid id, T model);
        Task<T> GetByReportId(Guid reportId);
        Task<T> GetByReportIdAsync(Guid reportId, string[] includes);
        Task RemoveByReportIdAsync(Guid reportId);
    }
}
