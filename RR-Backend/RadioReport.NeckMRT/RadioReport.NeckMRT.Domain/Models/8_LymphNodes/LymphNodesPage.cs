using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Constants;
using RadioReport.NeckMRT.Domain.Enums;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("NeckMRT/LymphNodes")]
    public class LymphNodesPage : PageModelBase<LymphNodesPage>
    {
        [RadioReportId("nec_m_040103-l", InstanceName = InstanceNames.LymphNodes, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<LymphNodesFinding> Findings { get; set; }
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtLymphNodes;
    }
}
