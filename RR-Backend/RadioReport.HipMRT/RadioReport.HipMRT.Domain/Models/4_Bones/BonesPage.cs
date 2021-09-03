using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Domain.Constants;

namespace RadioReport.HipMRT.Domain.Models.Bones
{
    [GeneratedControllerPageWithImageModel("HipMRT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        [RadioReportId("hip_m_040103", InstanceName = InstanceNames.Bones, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<BonesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HipMrtBones;
    }
}
