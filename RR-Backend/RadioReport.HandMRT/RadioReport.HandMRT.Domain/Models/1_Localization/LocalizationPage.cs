using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HandMRT.Domain.Enums;

namespace RadioReport.HandMRT.Domain.Models
{
    [GeneratedControllerPageModel("HandMRT/Localization")]
    public class LocalizationPage : PageModelBase<LocalizationPage>
    {
        [RadioReportId("han_m_010105")]
        public Locations Localization { get; set; }

        public PatientInformation PatientInformation { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HandMrtLocalization;
    }
}
