using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Enums;
using RadioReport.PelvisMRT.Domain.Constants;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("PelvisMRT/LymphNodes")]
    public class LymphNodesPage : PageModelBase<LymphNodesPage>
    {
        [RadioReportId("pel_m_110104", InstanceName = InstanceNames.LymphNodes, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<LymphNodesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.PelvisMrtLymphNodes;
    }
}
