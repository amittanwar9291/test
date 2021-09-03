using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMX.Domain.Constants;
using RadioReport.MammaMX.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.MammaMX.Domain.Models
{
    [GeneratedControllerPageModel("MammaMX/UltrasoundFinding")]
    public class UltrasoundFindingPage : PageModelBase<UltrasoundFindingPage>
    {
        [RadioReportId("mam_mx_070104l", InstanceName = InstanceNames.UltrasoundFinding, IsExportable = false)]
        public AreFindings AreFindings { get; set; }
        
        public IEnumerable<UltrasoundFinding> Findings { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMxUltrasoundFinding;
    }
}
