using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using RadioReport.Common.Extensions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Helpers;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages.Suggestions;

namespace RadioReport.Common.Module.Logic.Services
{
    public class ReportPageService : IReportPageService
    {
        private readonly IEnumerable<IPageManager> _pageManagers;
        private readonly ModuleContext _moduleContext;
        private readonly IReportManager _reportManager;

        protected virtual List<CustomSuggestion> CustomSuggestions { get; } = new List<CustomSuggestion>();

        public ReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager)
        {
            _pageManagers = pageManagers;
            _moduleContext = moduleContext;
            _reportManager = reportManager;
        }

        public IEnumerable<FieldIdsForPage> GetAvailableFieldIds()
        {
            if (_pageManagers.IsNullOrEmpty())
            {
                yield break;
            }

            foreach (var page in _pageManagers)
            {
                PageTypeNames.PageNumbersDictionary.TryGetValue(page.PageTypeName, out var pageNumber);

                var allSuggestions = page.GetAvailableFieldIds(pageNumber);

                foreach (var customSuggestion in CustomSuggestions)
                {
                    foreach (var rrid in customSuggestion.RrIds)
                    {
                        if (RridHelper.CheckRridValidityForPage(rrid, _moduleContext.Type.ToString(), pageNumber))
                        {
                            allSuggestions[rrid] = new HashSet<string>(customSuggestion.EnumValues);
                        }
                    }
                }

                var fieldIds = new FieldIdsForPage
                {
                    PageName = PageTypeNameHelper.GetPageNameFromPageTypeName(page.PageTypeName),
                    PageNumber = pageNumber,
                };

                foreach (var (key, value) in allSuggestions)
                {
                    fieldIds.RrIdsWithSuggestions.Add(key, value);
                }

                yield return fieldIds;
            }
        }

        public IDictionary<string, IEnumerable<string>> GetAvailableFindingTypes() =>
            _pageManagers.ToDictionary(page => PageTypeNameHelper.GetPageNameFromPageTypeName(page.PageTypeName), page => page.GetAvailableFindingTypes());

        public IDictionary<string, IDictionary<string, string>> GetAvailableTranslations(string languageCode, string pageName)
        {
            var pageManagersToCheck =
                _pageManagers.Where(p => string.IsNullOrEmpty(pageName) || PageTypeNameHelper.GetPageNameFromPageTypeName(p.PageTypeName) == pageName);
            var pageDetails = pageManagersToCheck.Select(p =>
            {
                PageTypeNames.PageNumbersDictionary.TryGetValue(p.PageTypeName, out var pageNumber);
                return (p.PageType, pageNumber);
            });

            var localizationOptions = Options.Create(new LocalizationOptions());
            var stringLocalizerFactory = new ResourceManagerStringLocalizerFactory(localizationOptions, NullLoggerFactory.Instance);
            var reportTranslationManager = new ReportTranslationManager(stringLocalizerFactory);

            return TranslationsReader.GetTranslationsList(reportTranslationManager, pageDetails, languageCode, _moduleContext.Type.ToString());
        }

        public async Task MarkPageAsModified(Guid reportId, Guid pageId)
        {
            var report = await _reportManager.GetByIdAsync(reportId, new[] { nameof(Report.Pages) });
            var pageInfo = report.Pages.FirstOrDefault(p => p.PageId == pageId);
            if (pageInfo != null && !pageInfo.WasModified)
            {
                pageInfo.WasModified = true;
            }

            await _reportManager.UpdateAsync(report);
        }

        public IPageManager GetPageManager(PageInfo pageInfo) => _pageManagers.FirstOrDefault(m => m.PageTypeName == pageInfo.TypeName);

        public virtual List<PageInfo> GetPagesForPreset(string presetCode) => throw new NotImplementedException();
    }
}
