using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxCT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Constants;

namespace RadioReport.ThoraxCT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("ThoraxCT/LungParenchyma")]
    public class LungParenchymaPage : PageModelBase<LungParenchymaPage>
    {
        [RadioReportId("tho_c_050103-l", InstanceName = nameof(InstanceNames.LungParenchyma), IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<LungParenchymaFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxCtLungParenchyma;
    }
}
