using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("AbdomenMRT/AdrenalGlands")]
    public class AdrenalGlandsPage : PageModelBase<AdrenalGlandsPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtAdrenalGlands;

        public List<AdrenalGlandsFinding> Findings { get; set; }

        [RadioReportId("abd_m_080103-l", InstanceName = nameof(InstanceNames.AdrenalGlands), IsExportable = false)]
        public AreFindingsExtended AreFindings { get; set; }
    }
}
