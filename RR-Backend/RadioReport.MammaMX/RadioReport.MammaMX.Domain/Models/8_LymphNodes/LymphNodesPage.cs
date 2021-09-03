using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMX.Domain.Constants;
using RadioReport.MammaMX.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.MammaMX.Domain.Models
{
    [GeneratedControllerPageModel("MammaMX/LymphNodes")]
    public class LymphNodesPage : PageModelBase<LymphNodesPage>
    {
        [RadioReportId("mam_mx_080104l", InstanceName = InstanceNames.LymphNodes, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<LymphNodesFinding> Findings { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMxLymphNodes;
    }
}
