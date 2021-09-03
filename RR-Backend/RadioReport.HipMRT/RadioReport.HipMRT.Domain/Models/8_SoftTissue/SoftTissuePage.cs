using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Models
{
    [GeneratedControllerPageModel("HipMRT/SoftTissue")]
    public class SoftTissuePage : PageModelBase<SoftTissuePage>
    {
        [RadioReportId("hip_m_080104", InstanceName = InstanceNames.SoftTissue, IsExportable = false)]
        public AreFindings AreFindings { get; set; }
        public IEnumerable<SoftTissueFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HipMrtSoftTissue;
    }
}
