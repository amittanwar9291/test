using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageModel("HeadMRT/FacialSkull")]
    public class FacialSkullPage : PageModelBase<FacialSkullPage>
    {
        public FacialSkullAreFindings AreFindings { get; set; }

        public List<FacialSkullFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtFacialSkull;
    }
}
