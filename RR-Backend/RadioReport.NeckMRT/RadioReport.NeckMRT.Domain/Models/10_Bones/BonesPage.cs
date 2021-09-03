using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Constants;
using RadioReport.NeckMRT.Domain.Enums;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageModel("NeckMRT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        [RadioReportId("nec_m_100104l", InstanceName = InstanceNames.Bones, IsExportable = false)]
        public AreFindings areFindings { get; set; }
        
        public IEnumerable<BonesFinding> Findings { get; set; }
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtBones;
    }
}
