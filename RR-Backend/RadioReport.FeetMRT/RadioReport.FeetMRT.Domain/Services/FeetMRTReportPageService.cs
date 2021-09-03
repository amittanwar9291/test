using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.FeetMRT.Domain.Services
{
    public class FeetMRTReportPageService : ReportPageService
    {
        public FeetMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.FeetMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.FeetMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.FeetMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.FeetMrtBones, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.FeetMrtLigamentsAndTendons, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.FeetMrtSoftTissue, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.FeetMrtSummary, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 8 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.FeetMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 9 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Feet MRT module");
            }

            return result;
        }
    }
}
