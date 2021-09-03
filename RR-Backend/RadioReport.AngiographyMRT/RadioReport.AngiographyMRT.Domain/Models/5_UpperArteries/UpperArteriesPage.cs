using RadioReport.AngiographyMRT.Domain.Enums;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.AngiographyMRT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyMRT/UpperArteries")]
    public class UpperArteriesPage : PageModelBase<UpperArteriesPage>
    {
        [RadioReportId("ang_m_050103-l", InstanceName = InstanceNames.UpperArteries, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<UpperArteriesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyMrtUpperArteries;
    }
}
