using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.Common.Module.Logic.Managers
{
    public class PageHttpManager<T> : IPageHttpManager<T> where T : PageModelBase<T>, new()
    {
        private readonly IPageManager<T> _pageManager;

        public PageHttpManager(IPageManager<T> pageManager)
        {
            _pageManager = pageManager;
        }

        public Task<T> Add(T model) => _pageManager.AddWithReportSessionAsync(model);

        public Task<T> Edit(Guid id, T model) => _pageManager.UpdateWithReportSessionAsync(id, model);

        public Task<T> GetById(Guid id) => _pageManager.GetByIdAsync(id);

        public Task<T> GetByReportId(Guid reportId) => _pageManager.GetByReportId(reportId);

        public Task<IEnumerable<RadioReportValue>> GetValuesForReport(Guid id) => _pageManager.GetValuesForReport(id);

        public T GetEmpty()
        {
            var getPresetMethod = typeof(T).GetMethod(nameof(PageModelBase<object>.GetEmpty), BindingFlags.Public | BindingFlags.Static);

            return (T) getPresetMethod?.Invoke(null, null) ?? Activator.CreateInstance<T>();
        }
    }
}
