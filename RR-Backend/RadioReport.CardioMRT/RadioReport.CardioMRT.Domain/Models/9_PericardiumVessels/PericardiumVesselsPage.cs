using RadioReport.CardioMRT.Domain.Constants;
using RadioReport.CardioMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;

namespace RadioReport.CardioMRT.Domain.Models
{
    [GeneratedControllerPageModel("CardioMRT/PericardiumVessels")]
    public class PericardiumVesselsPage : PageModelBase<PericardiumVesselsPage>
    {
        [RadioReportId("car_m_090103", InstanceName = InstanceNames.PericardiumVessels, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<PericardiumVesselsFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.CardioMrtPericardiumVessels;
    }
}
