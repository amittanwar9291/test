using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.AbdomenCT.Domain.Services
{
    public class AbdomenCTReportPageService : ReportPageService
    {
        public AbdomenCTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenCtAreaOfInvestigation, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenCtMedicalHistory, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenCtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenCtSpleen, PageNumber = 5 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.AbdomenCtAreaOfInvestigation, PageNumber = 1 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Abdomen CT module");
            }

            return result;
        }
    }
}