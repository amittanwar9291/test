using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Constants;
using RadioReport.PelvisMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/Bladder")]
    public class BladderPage : PageModelBase<BladderPage>
    {
        [RadioReportId("pel_m_090103-l", InstanceName = InstanceNames.Bladder, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<BladderFinding> Findings { get; set; }
        
        public override string PageTypeName => PageTypeNames.PelvisMrtBladder;
    }
}
