using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Enums.Anamnesis;

namespace RadioReport.SpineMRT.Domain.Models
{
    [GeneratedControllerPageModel("SpineMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        public ComplaintsType ComplaintsType { get; set; }

        [RadioReportId("spi_m_020303-l", InstanceName = nameof(LumbagoSideType), IsExportable = false)]
        public SideType LumbagoSideType { get; set; }

        [RadioReportId("spi_m_020304-l", InstanceName = nameof(NeurologySideType), IsExportable = false)]
        public SideType NeurologySideType { get; set; }

        public IEnumerable<Intervention> Interventions { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineMrtAnamnesis;
    }
}
