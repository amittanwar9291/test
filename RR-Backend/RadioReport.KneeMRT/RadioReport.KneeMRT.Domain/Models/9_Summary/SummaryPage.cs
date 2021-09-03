using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.KneeMRT.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Models
{
    [GeneratedControllerPageModel("KneeMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        [RadioReportId("kne_m_090105")]
        public bool IsXRay { get; set; }

        [RadioReportId("kne_m_090106")]
        public bool IsCT { get; set; }

        [RadioReportId("kne_m_090107")]
        public bool IsFollowUp { get; set; }

        public FollowUpTimeType FollowUpTimeType { get; set; }

        [RadioReportId("kne_m_090114")]
        public bool IsBiopsy { get; set; }

        public FindingsDynamicsType FindingsDynamicsType { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.KneeMrtSummary;
    }
}
