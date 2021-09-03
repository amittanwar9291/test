using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMX.Domain.Constants;
using RadioReport.MammaMX.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.MammaMX.Domain.Models
{
    [GeneratedControllerPageModel("MammaMX/MammographyFinding")]
    public class MammographyFindingPage : PageModelBase<MammographyFindingPage>
    {
        [RadioReportId("mam_mx_050104l", InstanceName = InstanceNames.MammographyFinding, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<MammographyFinding> Findings { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMxMammographyFinding;
    }
}
