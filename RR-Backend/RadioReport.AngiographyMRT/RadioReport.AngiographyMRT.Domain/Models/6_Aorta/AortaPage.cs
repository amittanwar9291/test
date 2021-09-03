using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.AngiographyMRT.Domain.Constants;
using RadioReport.AngiographyMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyMRT/Aorta")]
    public class AortaPage : PageModelBase<AortaPage>
    {
        [RadioReportId("anc_m_060103-l", InstanceName = nameof(InstanceNames.Aorta), IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<AortaFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyMrtAorta;
    }
}
