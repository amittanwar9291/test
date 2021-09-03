using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Constants;
using RadioReport.PelvisMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/Rectum")]
    public class RectumPage : PageModelBase<RectumPage>
    {
        [RadioReportId("pel_m_080103-l", InstanceName = InstanceNames.Rectum, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<RectumFinding> Findings { get; set; }

        public override string PageTypeName => PageTypeNames.PelvisMrtRectum;
    }
}
