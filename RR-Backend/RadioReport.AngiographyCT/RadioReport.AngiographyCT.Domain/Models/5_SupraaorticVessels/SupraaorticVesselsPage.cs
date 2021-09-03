using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Logic.Attributes;
using System.Collections.Generic;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Constants;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/SupraaorticVessels")]
    public class SupraaorticVesselsPage : PageModelBase<SupraaorticVesselsPage>
    {
        [RadioReportId("ang_c_050103-l", InstanceName = InstanceNames.SupraaorticVessels, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SupraaorticVesselsFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtSupraaorticVessels;
    }
}
