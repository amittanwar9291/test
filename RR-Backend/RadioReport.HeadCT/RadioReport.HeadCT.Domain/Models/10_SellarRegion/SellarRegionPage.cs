using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageModel("HeadCT/SellarRegion")]
    public class SellarRegionPage : PageModelBase<SellarRegionPage>
    {
        [RadioReportId("hea_c_100103-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SellarRegionFinding> Findings { get; set; }
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtSellarRegion;
    }
}
