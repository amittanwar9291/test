using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Enums.BasalNuclei;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageModel("HeadMRT/BasalNuclei")]
    public class BasalNucleiPage : PageModelBase<BasalNucleiPage>
    {
        public BasalNucleiAreFindings AreFindings { get; set; }

        public IEnumerable<BasalNucleiFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtBasalNuclei;
    }
}
