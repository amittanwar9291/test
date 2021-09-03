using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Services
{
    public class HeadCTReportPageService: ReportPageService
    {
        public HeadCTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
           moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            if(presetCode == null)
            {
                throw new ArgumentNullException(nameof(presetCode));
            }
            var result = new List<PageInfo>();

            if (presetCode.Equals("full", StringComparison.InvariantCulture))
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtExamination, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtVessels, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtMeninges, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtCortex, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtBasalNuclei, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtBrainstemCranialNerves, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtCerebrospinalFluidSpace, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtSellarRegion, PageNumber = 10 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtFacialSkull, PageNumber = 11 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadCtSummary, PageNumber = 12 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 13 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for HeadCT module");
            }

            return result;
        }
    }
}
