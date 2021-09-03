using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("HeadMRT/Vessels")]
    public class VesselsPage : PageModelBase<VesselsPage>
    {
        [RadioReportId("han_m_040103-l", InstanceName = InstanceNames.Vessels, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<VesselsFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtVessels;
    }
}
