using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Enums.Localization;

namespace RadioReport.SpineMRT.Domain.Models
{
    [GeneratedControllerPageModel("SpineMRT/Localization")]
    public class LocalizationPage : PageModelBase<LocalizationPage>
    {
        [RadioReportId("spi_m_010104")]
        public SpineLocations SpineLocation { get; set; }

        public ScanAreaType ScanAreaType { get; set; }

        public PatientInformation PatientInformation { get; set; }
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineMrtLocalization;
    }
}
