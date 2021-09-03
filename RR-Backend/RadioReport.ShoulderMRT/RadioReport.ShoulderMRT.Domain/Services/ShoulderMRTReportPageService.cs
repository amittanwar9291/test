using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.ShoulderMRT.Domain.Services
{
    public class ShoulderMRTReportPageService : ReportPageService
    {
        public ShoulderMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtBones, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtRotator, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtLabrumAndRibbons, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtJointAndBursae, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtSoftParts, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtSummary, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtJointAndBursae, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtSoftParts, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ShoulderMrtSummary, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Shoulder MRT module");
            }

            return result;
        }
    }
}
