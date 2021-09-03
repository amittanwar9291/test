using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Constants;
using RadioReport.NeckMRT.Domain.Enums;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageModel("NeckMRT/Vessels")]
    public class VesselsPage : PageModelBase<VesselsPage>
    {
        [RadioReportId("nec_m_090103-l", InstanceName = InstanceNames.Vessels, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<VesselsFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtVessels;
    }
}
