using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.NeckMRT.Domain.Services
{
    public class NeckMRTReportPageService : ReportPageService
    {
        public NeckMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtExamination, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtIndication, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtPharynx, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtLarynx, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtSoftTissues, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtThyroid, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtLymphNodes, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtVessels, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtBones, PageNumber = 10 });
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtSummary, PageNumber = 11 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 12 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.NeckMrtTechnology, PageNumber = 3 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for NeckMRT module");
            }

            return result;
        }
    }
}
