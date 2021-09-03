using System.Collections.Generic;
using RadioReport.AbdomenCT.Domain.Constants;
using RadioReport.AbdomenCT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenCT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("AbdomenCT/Spleen")]
    public class SpleenPage : PageModelBase<SpleenPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenCtSpleen;

        [RadioReportId("abd_c_050103-l", InstanceName = nameof(InstanceNames.Spleen), IsExportable = false)]
        public AreFindingsExtended AreFindings { get; set; }

        public IEnumerable<SpleenFinding> Findings { get; set; }
    }
}
