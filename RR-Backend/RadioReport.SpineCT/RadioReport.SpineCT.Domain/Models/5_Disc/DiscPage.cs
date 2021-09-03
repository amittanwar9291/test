using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.SpineCT.Domain.Constants;

namespace RadioReport.SpineCT.Domain.Models
{
    [GeneratedControllerPageModel("SpineCT/Disc")]
    public class DiscPage : PageModelBase<DiscPage>
    {
        [RadioReportId("spi_m_050103-l", InstanceName = InstanceNames.Disc, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<DiscFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineCtDisc;
    }
}
