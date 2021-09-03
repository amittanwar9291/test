using RadioReport.AngiographyCT.Domain.Enums.Localization;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/Localization")]
    public class LocalizationPage : PageModelBase<LocalizationPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtLocalization;
        
        [RadioReportId("ang_c_010201")]
        public Locations Localization { get; set; }

        public PatientInformation PatientInformation { get; set; }
    }
}
