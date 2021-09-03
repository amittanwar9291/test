using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("AbdomenMRT/PeritonealCavity")]
    public class PeritonealCavityPage : PageModelBase<PeritonealCavityPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtPeritonealCavity;

        [RadioReportId("abd_m_100103-l", InstanceName = nameof(InstanceNames.PeritonealCavity), IsExportable = false)]
        public AreFindings AreFindings { get; set; }
        
        public List<PeritonealCavityFinding> Findings { get;  set; }
    }
}
