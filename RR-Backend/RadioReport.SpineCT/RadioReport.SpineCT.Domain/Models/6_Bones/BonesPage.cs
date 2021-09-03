using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.SpineCT.Domain.Constants;

namespace RadioReport.SpineCT.Domain.Models
{
    [GeneratedControllerPageModel("SpineCT/Bones")]
    public class BonesPage : PageModelBase<BonesPage>
    {
        [RadioReportId("spi_c_060100-type", InstanceName = InstanceNames.Bones, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<BonesFinding> Findings { get; set; }
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineCtBones;
    }
}
