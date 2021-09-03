using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageModel("HeadMRT/BrainstemCranialNerves")]
    public class BrainstemCranialNervesPage : PageModelBase<BrainstemCranialNervesPage>
    {
        public BrainstemCranialNervesAreFindings AreFindings { get; set; }

        [RadioReportId("hea_m_080105")]
        public bool IsInTheHighResolutionSequences { get; set; }

        public IEnumerable<BrainstemCranialNervesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtBrainstemCranialNerves;
    }
}
