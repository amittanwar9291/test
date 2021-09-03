using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Constants;
using RadioReport.ShoulderMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    [GeneratedControllerPageModel("ShoulderMRT/SoftParts")]
    public class SoftPartsPage : PageModelBase<SoftPartsPage>
    {
        [RadioReportId("sho_m_080103", InstanceName = InstanceNames.SoftParts, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SoftPartsFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ShoulderMrtSoftParts;
    }
}
