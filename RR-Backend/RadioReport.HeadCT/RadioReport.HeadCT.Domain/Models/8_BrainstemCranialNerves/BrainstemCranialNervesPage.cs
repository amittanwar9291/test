using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageModel("HeadCT/BrainstemCranialNerves")]
    public class BrainstemCranialNervesPage : PageModelBase<BrainstemCranialNervesPage>
    {
        [RadioReportId("hea_c_080103-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<BrainstemCranialNervesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtBrainstemCranialNerves;
    }
}
