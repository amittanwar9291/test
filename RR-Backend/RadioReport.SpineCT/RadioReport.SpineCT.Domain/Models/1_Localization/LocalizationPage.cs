using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Enums;

namespace RadioReport.SpineCT.Domain.Models
{
    [GeneratedControllerPageModel("SpineCT/Localization")]
    public class LocalizationPage : PageModelBase<LocalizationPage>
    {
        [RadioReportId("spi_c_010104")]
        public SpineLocations SpineLocation { get; set; }

        public PatientInformation PatientInformation { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineCtLocalization;
    }
}
