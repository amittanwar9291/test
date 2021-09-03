using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Enums;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/Localization")]
    public class LocalizationPage : PageModelBase<LocalizationPage>
    {
        public PatientInformation PatientInformation { get; set; }

        [RadioReportId("pel_m_010204")]
        public bool IsMultiparametric { get; set; }

        [RadioReportId("pel_m_010208")]
        public bool IsDynamic { get; set; }

        public InvestigationType InvestigationType { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.PelvisMrtLocalization;
    }
}
