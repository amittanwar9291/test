using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums.Pancreas;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("AbdomenMRT/Pancreas")]
    public class PancreasPage : PageModelBase<PancreasPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtPancreas;

        [RadioReportId("abd_m_060103-l", InstanceName = nameof(InstanceNames.Pancreas), IsExportable = false)]
        public AreFindingsExtended AreFindings { get; set; }

        public IEnumerable<PancreasFinding> Findings { get; set; }
    }
}
