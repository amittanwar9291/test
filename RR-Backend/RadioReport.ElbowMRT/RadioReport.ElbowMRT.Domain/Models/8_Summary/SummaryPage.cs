using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ElbowMRT.Domain.Enums.Summary;

namespace RadioReport.ElbowMRT.Domain.Models
{
    [GeneratedControllerPageModel("ElbowMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        public ComparisonToPriorExamsType ComparisonToPriorExamsType { get; set; }

        [RadioReportId("elb_m_080202")]
        public bool IsXRay { get; set; }

        [RadioReportId("elb_m_080203")]
        public bool IsCT { get; set; }

        [RadioReportId("elb_m_080206")]
        public bool IsFollowUp { get; set; }

        public TimeType TimeType { get; set; }

        [RadioReportId("elb_m_080213")]
        public bool IsBiopsy { get; set; }

        public TCategoryType TCategoryType { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ElbowMrtSummary;
    }
}
