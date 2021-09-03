using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Constants;

namespace RadioReport.KneeMRT.Domain.Models
{
    [GeneratedControllerPageModel("KneeMRT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        [RadioReportId("kne_m_040103", InstanceName = InstanceNames.Bones, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<BonesFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.KneeMrtBones;

        public static BonesPage GetEmpty() =>
            new BonesPage
            {
                Findings = new List<BonesFinding>
                {
                    new BonesFinding()
                }
            };
    }
}
