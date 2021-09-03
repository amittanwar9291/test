using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Services
{
    public class HeadMRTReportPageService: ReportPageService
    {
        public HeadMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
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
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtExamination, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtVessels, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtMeninges, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtCortex, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtBasalNuclei, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtBrainstemCranialNerves, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtCerebrospinalFluidSpace, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtSellarRegion, PageNumber = 10 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtFacialSkull, PageNumber = 11 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HeadMrtSummary, PageNumber = 12 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 13 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Head MRT module");
            }

            return result;
        }
    }
}
