using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxCT.Domain.Constants;
using RadioReport.ThoraxCT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ThoraxCT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxCT/SoftParts")]
    public class SoftPartsPage : PageModelBase<SoftPartsPage>
    {
        [RadioReportId("tho_c_070103-l", InstanceName = InstanceNames.SoftParts, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SoftPartsFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxCtSoftParts;
    }
}
