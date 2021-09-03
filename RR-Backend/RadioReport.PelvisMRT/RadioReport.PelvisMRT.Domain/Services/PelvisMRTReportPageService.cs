using System;
using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.PelvisMRT.Domain.Services
{
    public class PelvisMRTReportPageService : ReportPageService
    {
        public PelvisMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            if (presetCode == null) throw new ArgumentNullException(nameof(presetCode));

            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtProstata, PageNumber = 4, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtMaleGender, PageNumber = 5, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtFemaleGender, PageNumber = 6, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtPelvicFloor, PageNumber = 7, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtRectum, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtBladder, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtBones, PageNumber = 10 });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtLymphNodes, PageNumber = 11 });
                result.Add(new PageInfo { TypeName = PageTypeNames.PelvisMrtSummary, PageNumber = 12 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 13 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for PelvisMRT module");
            }

            return result;
        }
    }
}
