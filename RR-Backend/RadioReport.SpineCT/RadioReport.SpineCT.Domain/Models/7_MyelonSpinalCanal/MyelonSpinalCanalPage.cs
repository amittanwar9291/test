using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal;
using System.Collections.Generic;

namespace RadioReport.SpineCT.Domain.Models
{
    [GeneratedControllerPageModel("SpineCT/MyelonSpinalCanal")]
    public class MyelonSpinalCanalPage : PageModelBase<MyelonSpinalCanalPage>
    {
        public MyelonSpinalCanalAreFindings AreFindings { get; set; }

        public IEnumerable<MyelonSpinalCanalFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineCtMyelonSpinalCanal;
    }
}
