using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.ShoulderMRT.Domain.Enums;
using RadioReport.ShoulderMRT.Domain.Constants;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("ShoulderMRT/Rotator")]
    public class RotatorPage : PageModelBase<RotatorPage>
    {
        // 5.1
        [RadioReportId("sho_m_050105")]
        public AcromionType AcromionType { get; set; }

        [RadioReportId("sho_m_050106")]
        public bool IsOsAcromiale { get; set; }

        // 5.2
        [RadioReportId("sho_m_050107", InstanceName = InstanceNames.Rotator, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<RotatorFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ShoulderMrtRotator;
    }
}
