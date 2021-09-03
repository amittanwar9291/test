using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ElbowMRT.Domain.Enums;

namespace RadioReport.ElbowMRT.Domain.Models
{
    [GeneratedControllerPageModel("ElbowMRT/Localization")]
    public class LocalizationPage : PageModelBase<LocalizationPage>
    {
        [RadioReportId("elb_m_010105")]
        public Locations Localization { get; set; }

        public PatientInformation PatientInformation { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ElbowMrtLocalization;
    }
}
