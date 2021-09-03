using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Enums.BasalNuclei;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageModel("HeadCT/BasalNuclei")]
    public class BasalNucleiPage : PageModelBase<BasalNucleiPage>
    {
        public BasalNucleiAreFindings AreFindings { get; set; }

        public IEnumerable<BasalNucleiFinding> Findings { get; set; }
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtBasalNuclei;
    }
}
