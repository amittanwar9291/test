using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HandMRT.Domain.Constants;
using RadioReport.HandMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HandMRT.Domain.Models
{
    [GeneratedControllerPageModel("HandMRT/CapsuleAndRibbons")]
    public class CapsuleAndRibbonsPage : PageModelBase<CapsuleAndRibbonsPage>
    {
        [RadioReportId("han_m_050103-l", InstanceName = InstanceNames.CapsuleAndRibbons, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<CapsuleAndRibbonsFinding> Findings { get; set; }
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HandMrtCapsuleAndRibbons;
    }
}
