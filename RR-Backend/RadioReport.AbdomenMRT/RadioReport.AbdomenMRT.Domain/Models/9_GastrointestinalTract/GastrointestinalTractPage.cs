using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("AbdomenMRT/GastrointestinalTract")]
    public class GastrointestinalTractPage : PageModelBase<GastrointestinalTractPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtGastrointestinalTract;

        [RadioReportId("abd_m_090103-l", InstanceName = nameof(InstanceNames.GastrointestinalTract), IsExportable = false)]
        public AreFindingsExtended AreFindings { get; set; }

        public List<GastrointestinalTractFinding> Findings { get; set; }
    }
}
