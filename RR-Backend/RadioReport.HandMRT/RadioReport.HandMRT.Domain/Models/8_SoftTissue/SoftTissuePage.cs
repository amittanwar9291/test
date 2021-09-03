using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.HandMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Constants;

namespace RadioReport.HandMRT.Domain.Models
{
    [GeneratedControllerPageModel("HandMRT/SoftTissue")]
    public class SoftTissuePage : PageModelBase<SoftTissuePage>
    {
        [RadioReportId("han_m_080103-l", InstanceName = InstanceNames.SoftTissue, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SoftTissueFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HandMrtSoftTissue;
    }
}
