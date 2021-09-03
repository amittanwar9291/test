using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageModel("HeadMRT/CerebrospinalFluidSpace")]
    public class CerebrospinalFluidSpacePage : PageModelBase<CerebrospinalFluidSpacePage>
    {
        public CerebrospinalAreFindings AreFindings { get; set; }

        public IEnumerable<CerebrospinalFluidSpaceFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtCerebrospinalFluidSpace;
    }
}
