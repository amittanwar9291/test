using System;
using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.AngiographyMRT.Domain.Services
{
    public class AngiographyMRTReportPageService : ReportPageService
    {
        public AngiographyMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }
        
        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            if (presetCode == null) throw new ArgumentNullException(nameof(presetCode));

            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyMrtSupraaorticVessels, PageNumber = 4, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyMrtUpperArteries, PageNumber = 5, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyMrtAorta, PageNumber = 6, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyMrtAbdomen, PageNumber = 7, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyMrtPelvisLegArteries, PageNumber = 8, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyMrtSummary, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for AngiographyMRT module");
            }

            return result;
        }

    }
}
