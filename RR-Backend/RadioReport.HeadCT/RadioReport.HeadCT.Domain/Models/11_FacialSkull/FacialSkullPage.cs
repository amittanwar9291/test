using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageModel("HeadCT/FacialSkull")]
    public class FacialSkullPage : PageModelBase<FacialSkullPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtFacialSkull;
    }
}
