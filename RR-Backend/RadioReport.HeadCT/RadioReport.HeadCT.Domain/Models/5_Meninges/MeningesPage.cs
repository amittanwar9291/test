using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("HeadCT/Meninges")]
    public class MeningesPage : PageModelBase<MeningesPage>
    {
        [RadioReportId("hea_c_050103-l", InstanceName = InstanceNames.Meninges, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<MeningesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtMeninges;
    }
}
