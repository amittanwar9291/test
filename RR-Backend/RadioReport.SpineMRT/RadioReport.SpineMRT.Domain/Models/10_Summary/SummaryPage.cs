using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineMRT.Domain.Enums.Summary;

namespace RadioReport.SpineMRT.Domain.Models
{
    [GeneratedControllerPageModel("SpineMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        [RadioReportId("spi_m_100104")]
        public bool IsCT { get; set; }

        [RadioReportId("spi_m_100105")]
        public bool IsScintigraphy { get; set; }

        [RadioReportId("spi_m_100106")]
        public bool IsSPECTCT { get; set; }

        [RadioReportId("spi_m_100107")]
        public bool IsPETCT { get; set; }

        public ConsultationType ConsultationType { get; set; }

        [RadioReportId("spi_m_100201")]
        public bool IsInterventional { get; set; }

        public InterventionType InterventionType { get; set; }

        [RadioReportId("spi_m_100206")]
        public bool IsFacetJointInfiltrationRight { get; set; }

        [RadioReportId("spi_m_100207")]
        public bool IsFacetJointInfiltrationLeft { get; set; }

        [RadioReportId("spi_m_100209")]
        public bool IsSIJInfiltrationRight { get; set; }

        [RadioReportId("spi_m_100210")]
        public bool IsSIJInfiltrationLeft { get; set; }

        [RadioReportId("spi_m_100211")]
        public bool IsRegistrationVia { get; set; }

        [RadioReportId("spi_m_100301")]
        public bool IsBiopsy { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineMrtSummary;
    }
}
