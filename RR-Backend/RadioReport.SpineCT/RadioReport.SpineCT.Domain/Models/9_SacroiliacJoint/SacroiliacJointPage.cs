using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.SpineCT.Domain.Constants;

namespace RadioReport.SpineCT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("SpineCT/SacroiliacJoint")]
    public class SacroiliacJointPage : PageModelBase<SacroiliacJointPage>
    {
        [RadioReportId("spi_c_090103-l", InstanceName = InstanceNames.SacroiliacJoint, IsExportable = false)]
        public AreFindings AreFindings { get; set; }
        public IEnumerable<SacroiliacJointFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineCtSacroiliacJoint;
    }
}
