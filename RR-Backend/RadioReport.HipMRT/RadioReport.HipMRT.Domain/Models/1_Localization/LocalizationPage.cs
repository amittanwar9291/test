using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HipMRT.Domain.Enums;

namespace RadioReport.HipMRT.Domain.Models
{
    [GeneratedControllerPageModel("HipMRT/Localization")]
    public class LocalizationPage : PageModelBase<LocalizationPage>
    {
        [RadioReportId("hip_m_010105")]
        public HipLocalizations HipLocalization { get; set; }

        public PatientInformation PatientInformation { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HipMrtLocalization;
    }
}
