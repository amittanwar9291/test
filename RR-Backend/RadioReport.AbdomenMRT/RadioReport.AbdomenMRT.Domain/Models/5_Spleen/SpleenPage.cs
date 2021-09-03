using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("AbdomenMRT/Spleen")]
    public class SpleenPage : PageModelBase<SpleenPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtSpleen;

        [RadioReportId("abd_m_050103-l", InstanceName = nameof(InstanceNames.Spleen), IsExportable = false)]
        public AreFindingsExtended AreFindings { get; set; }

        public IEnumerable<SpleenFinding> Findings { get; set; }
    }
}
