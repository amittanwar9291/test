using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxMRT.Domain.Constants;
using RadioReport.ThoraxMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("ThoraxMRT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        [RadioReportId("tho_m_070103-l", InstanceName = nameof(InstanceNames.Bones), IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<BonesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxMrtBones;
    }
}
