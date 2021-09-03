using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Constants;
using RadioReport.NeckMRT.Domain.Enums;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("NeckMRT/Pharynx")]
    public class PharynxPage : PageModelBase<PharynxPage>
    {
        [RadioReportId("nec_m_040103-l", InstanceName = InstanceNames.Pharynx, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<PharynxFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtPharynx;
    }
}
