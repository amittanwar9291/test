using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.KneeMRT.Domain.Constants;
using RadioReport.KneeMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.KneeMRT.Domain.Models
{
    [GeneratedControllerPageModel("KneeMRT/OsteoInterface")]
    public class OsteoInterfacePage : PageModelBase<OsteoInterfacePage>
    {
        [RadioReportId("kne_m_060103", InstanceName = InstanceNames.OsteoInterface, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<OsteoInterfaceFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.KneeMrtOsteoInterface;
    }
}
