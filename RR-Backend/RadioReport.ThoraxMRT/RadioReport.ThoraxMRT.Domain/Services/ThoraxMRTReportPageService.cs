using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.ThoraxMRT.Domain.Services
{
    public class ThoraxMRTReportPageService : ReportPageService
    {
        public ThoraxMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtStudyArea, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtMediastinum, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtLungParenchyma, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtPleura, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtBones, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtSummary, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 9 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtStudyArea, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.ThoraxMrtLungParenchyma, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 9 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for ThoraxMRT module");
            }

            return result;
        }
    }
}
