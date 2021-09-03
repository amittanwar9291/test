using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Constants;
using RadioReport.PelvisMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        [RadioReportId("pel_m_100104l", InstanceName = InstanceNames.Bones, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<BonesFinding> Findings { get; set; }

        public override string PageTypeName => PageTypeNames.PelvisMrtBones;
    }
}
