using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Constants;

namespace RadioReport.SpineMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("SpineMRT/Disc", nameof(DiscFinding.MarginalisImageFile), nameof(DiscFinding.PosteriorImageFile),
        nameof(DiscFinding.AnteriorImageFile), nameof(DiscFinding.DiscitisImageFile), nameof(DiscFinding.PeriostitisImageFile))]
    public class DiscPage : PageModelBase<DiscPage>
    {
        [RadioReportId("spi_m_050103-l", InstanceName = InstanceNames.Disc, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<DiscFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineMrtDisc;
    }
}
