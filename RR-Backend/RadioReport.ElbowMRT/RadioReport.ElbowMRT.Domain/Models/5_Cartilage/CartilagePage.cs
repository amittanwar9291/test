using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ElbowMRT.Domain.Constants;
using RadioReport.ElbowMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ElbowMRT.Domain.Models
{
    [GeneratedControllerPageModel("ElbowMRT/Cartilage")]
    public class CartilagePage : PageModelBase<CartilagePage>
    {
        [RadioReportId("elb_c_050103-l", InstanceName = InstanceNames.Cartilage, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<CartilageFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ElbowMrtCartilage;
    }
}
