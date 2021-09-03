using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.MammaMRT.Domain.Models
{
    [GeneratedControllerPageModel("MammaMRT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        public BonesType BonesType { get; set; }

        public IEnumerable<BonesFinding> Findings { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMrtBones;
    }
}
