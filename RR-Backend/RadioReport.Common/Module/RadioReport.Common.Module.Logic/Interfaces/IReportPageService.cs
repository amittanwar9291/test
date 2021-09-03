using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Models.Pages.Suggestions;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IReportPageService
    {
        IEnumerable<FieldIdsForPage> GetAvailableFieldIds();
        IDictionary<string, IEnumerable<string>> GetAvailableFindingTypes();
        IDictionary<string, IDictionary<string, string>> GetAvailableTranslations(string languageCode, string pageName);
        Task MarkPageAsModified(Guid reportId, Guid pageId);
        List<PageInfo> GetPagesForPreset(string presetCode);
        IPageManager GetPageManager(PageInfo pageInfo);
    }
}
