using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.KneeMRT.Domain.Constants;
using RadioReport.KneeMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.KneeMRT.Domain.Models
{
    [GeneratedControllerPageModel("KneeMRT/Patella")]
    public class PatellaPage : PageModelBase<PatellaPage>
    {
        [RadioReportId("kne_m_070103", InstanceName = InstanceNames.Patella, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<PatellaFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.KneeMrtPatella;
    }
}
