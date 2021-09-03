using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.KneeMRT.Domain.Constants;
using RadioReport.KneeMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.KneeMRT.Domain.Models
{
    [GeneratedControllerPageModel("KneeMRT/SoftParts")]
    public class SoftPartsPage : PageModelBase<SoftPartsPage>
    {
        [RadioReportId("kne_m_080103", InstanceName = InstanceNames.SoftParts, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SoftPartsFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.KneeMrtSoftParts;
    }
}
