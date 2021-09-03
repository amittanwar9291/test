using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HandMRT.Domain.Constants;
using RadioReport.HandMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HandMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("HandMRT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        [RadioReportId("han_m_040103-l", InstanceName = InstanceNames.Bones, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<BonesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HandMrtBones;
    }
}
