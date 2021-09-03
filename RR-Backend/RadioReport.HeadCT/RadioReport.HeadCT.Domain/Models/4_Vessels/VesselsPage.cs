using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("HeadCT/Vessels", nameof(VesselsFinding.ImageFile), nameof(VesselsFinding.Perfusion01ImageFile), nameof(VesselsFinding.Perfusion02ImageFile))]
    public class VesselsPage : PageModelBase<VesselsPage>
    {
        [RadioReportId("hea_c_040103-l", InstanceName = InstanceNames.Vessels, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<VesselsFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtVessels;
    }
}
