using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Constants;
using RadioReport.NeckMRT.Domain.Enums;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("NeckMRT/SoftTissues")]
    public class SoftTissuesPage : PageModelBase<SoftTissuesPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtSoftTissues;
        
        [RadioReportId("nec_m_060103-l", InstanceName = InstanceNames.SoftTissues, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SoftTissuesFinding> Findings { get; set; }
    }
}
