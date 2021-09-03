using System;
using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.AngiographyCT.Domain.Services
{
    public class AngiographyCTReportPageService : ReportPageService
    {
        public AngiographyCTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }
        
        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            if (presetCode == null) throw new ArgumentNullException(nameof(presetCode));

            var result = new List<PageInfo>();

            if (presetCode.Equals("full", StringComparison.InvariantCulture))
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtTechnology, PageNumber = 3 });
				result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtCoronaryArteries, PageNumber = 4, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtSupraaorticVessels, PageNumber = 5, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtUpperArteries, PageNumber = 6, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtAorta, PageNumber = 7, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtAbdomen, PageNumber = 8, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtPelvisLegArteries, PageNumber = 9, IsBlocked = true });
				result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtSoftTissue, PageNumber = 10 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AngiographyCtSummary, PageNumber = 11 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 12 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for AngiographyCT module");
            }

            return result;
        }
    }
}
