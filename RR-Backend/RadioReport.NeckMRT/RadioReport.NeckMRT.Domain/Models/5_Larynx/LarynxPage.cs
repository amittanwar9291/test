using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Constants;
using RadioReport.NeckMRT.Domain.Enums;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("NeckMRT/Larynx")]
    public class LarynxPage : PageModelBase<LarynxPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtLarynx;
        
        [RadioReportId("nec_m_050103-l", InstanceName = InstanceNames.Larynx, IsExportable = false)]
        public AreFindings AreFindings { get; set; }
        public IEnumerable<LarynxFinding> Findings { get; set; }
    }
}
