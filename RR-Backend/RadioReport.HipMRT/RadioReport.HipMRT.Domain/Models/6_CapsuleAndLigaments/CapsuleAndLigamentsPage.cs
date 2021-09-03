using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HipMRT.Domain.Constants;
using RadioReport.HipMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments
{
    [GeneratedControllerPageModel("HipMRT/CapsuleAndLigaments")]
    public class CapsuleAndLigamentsPage : PageModelBase<CapsuleAndLigamentsPage>
    {
        [RadioReportId("hip_m_060104", InstanceName = InstanceNames.CapsuleAndLigaments, IsExportable = false)]
        public AreFindings AreFindings { get; set; }
        
        public IEnumerable<CapsuleAndLigamentsFinding> Findings { get; set; }
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HipMrtCapsuleAndLigaments;
    }
}
