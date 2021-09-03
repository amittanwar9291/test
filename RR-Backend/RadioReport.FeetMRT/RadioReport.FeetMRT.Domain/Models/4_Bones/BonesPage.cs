using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.FeetMRT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.FeetMRT.Domain.Constants;

namespace RadioReport.FeetMRT.Domain.Models
{
    [GeneratedControllerPageModel("FeetMRT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        [RadioReportId("anc_m_040103-l", InstanceName = InstanceNames.Bones, IsExportable = false)]
        public AreFindings AreFindings { get; set; }
        public IEnumerable<BonesFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.FeetMrtBones;
    }
}
