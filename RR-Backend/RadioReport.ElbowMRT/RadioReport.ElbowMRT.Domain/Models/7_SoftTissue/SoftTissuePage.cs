using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.ElbowMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.ElbowMRT.Domain.Constants;

namespace RadioReport.ElbowMRT.Domain.Models
{
    [GeneratedControllerPageModel("ElbowMRT/SoftTissue")]
    public class SoftTissuePage : PageModelBase<SoftTissuePage>
    {
        [RadioReportId("elb_m_070104l", InstanceName = InstanceNames.SoftTissue, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SoftTissueFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ElbowMrtSoftTissue;
    }
}
