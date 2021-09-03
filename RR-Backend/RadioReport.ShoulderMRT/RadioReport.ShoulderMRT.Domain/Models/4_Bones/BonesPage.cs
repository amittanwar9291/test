using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Constants;
using RadioReport.ShoulderMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("ShoulderMRT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        [RadioReportId("sho_m_040103", InstanceName = InstanceNames.Bones, IsExportable = false)]
        public AreFindings AreFindings { get; set; }
        
        public IEnumerable<BonesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ShoulderMrtBones;
    }
}
