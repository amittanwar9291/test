using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineMRT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.SpineMRT.Domain.Constants;

namespace RadioReport.SpineMRT.Domain.Models
{
    [GeneratedControllerPageModel("SpineMRT/SacroiliacJoint")]
    public class SacroiliacJointPage : PageModelBase<SacroiliacJointPage>
    {  
        [RadioReportId("spi_m_090103-l", InstanceName = InstanceNames.SacroiliacJoint, IsExportable = false)]
        public AreFindingsType AreFindings { get; set; }

        public IEnumerable<SacroiliacJointFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineMrtSacroiliacJoint;
    }
}
