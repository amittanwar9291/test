using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineMRT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Constants;

namespace RadioReport.SpineMRT.Domain.Models
{
    [GeneratedControllerPageModel("SpineMRT/SoftTissues")]
    public class SoftTissuesPage : PageModelBase<SoftTissuesPage>
    {
        [RadioReportId("spi_m_080103-l", InstanceName = InstanceNames.SoftTissues, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SoftTissuesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineMrtSoftTissues;
    }
}
