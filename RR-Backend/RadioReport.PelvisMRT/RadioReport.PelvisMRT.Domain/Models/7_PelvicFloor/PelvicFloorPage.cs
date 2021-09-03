using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Enums.PelvicFloor;
using System.Collections.Generic;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/PelvicFloor")]
    public class PelvicFloorPage : PageModelBase<PelvicFloorPage>
    {
        public PelvicFloorAreFindings AreFindings { get; set; }

        public IEnumerable<PelvicFloorFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.PelvisMrtPelvicFloor;
    }
}
