using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.FeetMRT.Domain.Enums;

namespace RadioReport.FeetMRT.Domain.Models
{
    [GeneratedControllerPageModel("FeetMRT/Localization")]
    public class LocalizationPage : PageModelBase<LocalizationPage>
    {
        [RadioReportId("anc_m_010104")]
        public Locations Localization { get; set; }

        [RadioReportId("anc_m_010106")]
        public bool IsAnkleJoint { get; set; }

        [RadioReportId("anc_m_010107")]
        public bool IsFoot { get; set; }

        [RadioReportId("anc_m_010108")]
        public bool IsForefoot { get; set; }

        public PatientInformation PatientInformation { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.FeetMrtLocalization;
    }
}
