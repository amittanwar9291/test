using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.ElbowMRT.Domain.Services
{
    public class ElbowMRTReportPageService : ReportPageService
    {
        public ElbowMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.ElbowMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ElbowMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ElbowMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ElbowMrtBones, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ElbowMrtCartilage, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ElbowMrtTendonsAndMuscles, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ElbowMrtSoftTissue, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ElbowMrtSummary, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 9 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.ElbowMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 9 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Elbow MRT module");
            }

            return result;
        }
    }
}
