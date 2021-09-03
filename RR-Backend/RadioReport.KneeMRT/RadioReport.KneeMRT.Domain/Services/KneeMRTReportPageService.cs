using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.KneeMRT.Domain.Services
{
    public class KneeMRTReportPageService : ReportPageService
    {
        public KneeMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtBones, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtRibbons, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtOsteoInterface, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtPatella, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtSoftParts, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtSummary, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.KneeMrtBones, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Knee MRT module");
            }

            return result;
        }
    }
}
