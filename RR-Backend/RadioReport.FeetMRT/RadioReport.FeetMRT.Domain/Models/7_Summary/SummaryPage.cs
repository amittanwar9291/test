using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.FeetMRT.Domain.Enums._7_Summary;

namespace RadioReport.FeetMRT.Domain.Models
{
    [GeneratedControllerPageModel("FeetMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        public override string PageTypeName => PageTypeNames.FeetMrtSummary;

        public EvaluationType EvaluationType { get; set; }

        [RadioReportId("anc_m_070203")]
        public bool IsSupplementaryDiagnosticsXray { get; set; }

        [RadioReportId("anc_m_070204")]
        public bool isSupplementaryDiagnosticsCT { get; set; }

        [RadioReportId("anc_m_070205")]
        public bool IsFollowUp { get; set; }

        public TimeType FollowUpTimeType { get; set; }

        [RadioReportId("anc_m_070212")]
        public bool isBiopsy { get; set; }

        [RadioReportId("anc_m_070212")]
        public TClassificationType TClassificationType { get; set; }

    }
}
