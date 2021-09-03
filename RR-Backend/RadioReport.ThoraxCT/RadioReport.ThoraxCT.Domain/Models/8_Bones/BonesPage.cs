using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxCT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Constants;

namespace RadioReport.ThoraxCT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxCT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        [RadioReportId("tho_c_080103-l", InstanceName = nameof(InstanceNames.Bones), IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<BonesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxCtBones;
    }
}
