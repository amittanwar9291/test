using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Enums.Cortex;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageModel("HeadMRT/Cortex")]
    public class CortexPage : PageModelBase<CortexPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtCortex;

        public CortexAreFindings AreFindings { get; set; }

        public IEnumerable<CortexFinding> Findings { get; set; }
    }
}
