using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Enums.Cortex;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageModel("HeadCT/Cortex")]
    public class CortexPage : PageModelBase<CortexPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtCortex;

        public CortexAreFindings AreFindings { get; set; }

        public IEnumerable<CortexFinding> Findings { get; set; }
    }
}
