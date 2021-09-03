using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.ThoraxCT.Domain.Services
{
    public class ThoraxCTReportPageService : ReportPageService
    {
        public ThoraxCTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtStudyArea, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtMediastinum, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtLungParenchyma, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtLungInterstitium, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtSoftParts, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtBones, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtSummary, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtStudyArea, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxCtLungParenchyma, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Thorax CT module");
            }

            return result;
        }
    }
}
