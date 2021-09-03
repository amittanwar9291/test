using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.HipMRT.Domain.Services
{
    public class HipMRTReportPageService : ReportPageService
    {
        public HipMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.HipMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HipMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HipMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HipMrtBones, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HipMrtCartilageAndLabrum, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HipMrtCapsuleAndLigaments, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HipMrtMusclesAndTendons, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HipMrtSoftTissue, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.HipMrtSummary, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.HipMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Hip MRT module");
            }

            return result;
        }
    }
}
