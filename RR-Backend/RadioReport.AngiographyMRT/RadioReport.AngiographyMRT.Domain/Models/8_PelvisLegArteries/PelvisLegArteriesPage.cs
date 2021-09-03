using RadioReport.AngiographyMRT.Domain.Enums;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.AngiographyMRT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyMRT/PelvisLegArteries")]
    public class PelvisLegArteriesPage : PageModelBase<PelvisLegArteriesPage>
    {

        [RadioReportId("ang_m_080103-l", InstanceName = InstanceNames.PelvisLegArteries, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<PelvisLegArteriesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyMrtPelvisLegArteries;
    }
}
