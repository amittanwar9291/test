using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.HandMRT.Domain.Services
{
    public class HandMRTReportPageService : ReportPageService
    {
        public HandMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();
            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.HandMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HandMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HandMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HandMrtBones, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HandMrtCapsuleAndRibbons, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HandMrtTendinopathy, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HandMrtNerveCompression, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HandMrtSoftTissue, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HandMrtEvaluation, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.HandMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Hand MRT module");
            }

            return result;
        }
    }
}
