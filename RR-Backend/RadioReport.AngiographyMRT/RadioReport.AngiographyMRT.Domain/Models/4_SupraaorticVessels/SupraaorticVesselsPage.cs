using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.AngiographyMRT.Domain.Constants;
using RadioReport.AngiographyMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyMRT/SupraaorticVessels")]
    public class SupraaorticVesselsPage : PageModelBase<SupraaorticVesselsPage>
    {
        [RadioReportId("anc_m_040103-l", InstanceName = InstanceNames.SupraaorticVessels, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SupraaorticVesselsFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyMrtSupraaorticVessels;
    }
}
