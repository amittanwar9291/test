using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("AbdomenMRT/LymphaticSystem")]
    public class LymphaticSystemPage : PageModelBase<LymphaticSystemPage>
    {
        [RadioReportId("abd_m_110103-l", InstanceName = nameof(InstanceNames.LymphaticSystem), IsExportable = false)]
        public AreFindingsExtended AreFindings { get; set; }

        public IEnumerable<LymphaticSystemFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtLymphaticSystem;
    }
}

