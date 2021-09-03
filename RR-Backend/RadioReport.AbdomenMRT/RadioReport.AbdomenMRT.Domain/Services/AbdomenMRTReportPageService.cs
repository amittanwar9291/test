using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.AbdomenMRT.Domain.Services
{
    public class AbdomenMRTReportPageService : ReportPageService
    {
        public AbdomenMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtExaminationRegion, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtLiver, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtSpleen, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtPancreas, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtKidneys, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtAdrenalGlands, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtGastrointestinalTract, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtPeritonealCavity, PageNumber = 10 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtLymphaticSystem, PageNumber = 11 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtSummary, PageNumber = 12 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 13 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenMrtExaminationRegion, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 9 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Abdomen MRT module");
            }

            return result;
        }
    }
}
