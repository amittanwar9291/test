using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Enums.SellarRegion;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageModel("HeadMRT/SellarRegion")]
    public class SellarRegionPage : PageModelBase<SellarRegionPage>
    {
        public SellarRegionAreFindings AreFindings { get; set; }

        public IEnumerable<SellarRegionFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtSellarRegion;
    }
}
