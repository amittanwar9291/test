using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineMRT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.SpineMRT.Domain.Constants;

namespace RadioReport.SpineMRT.Domain.Models
{
    [GeneratedControllerPageModel("SpineMRT/SpinalCanal")]
    public class SpinalCanalPage : PageModelBase<SpinalCanalPage>
    {    
        [RadioReportId("spi_m_070103-l", InstanceName = InstanceNames.SpinalCanal, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SpinalCanalFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineMrtSpinalCanal;
    }
}
