using RadioReport.AngiographyMRT.Domain.Enums.Localization;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;


namespace RadioReport.AngiographyMRT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyMRT/Localization")]
    public class LocalizationPage : PageModelBase<LocalizationPage>
    {
        [RadioReportId("ang_m_010201")]
        public Locations Localization { get; set; }

        public PatientInformation PatientInformation { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyMrtLocalization;
    }
}
