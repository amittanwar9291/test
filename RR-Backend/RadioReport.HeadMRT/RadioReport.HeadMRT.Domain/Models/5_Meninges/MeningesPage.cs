using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Enums.Meninges;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageModel("HeadMRT/Meninges")]
    public class MeningesPage : PageModelBase<MeningesPage>
    {
        public MeningesAreFindings AreFindings { get; set; }

        public IEnumerable<MeningesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtMeninges;
    }
}
