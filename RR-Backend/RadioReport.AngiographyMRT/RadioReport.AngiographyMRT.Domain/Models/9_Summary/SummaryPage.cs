using RadioReport.AngiographyMRT.Domain.Enums.Evaluation;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        public ComparisonToPriorExamsType ComparisonToPriorExamsType { get; set; }

        [RadioReportId("ang_m_090201")]
        public bool IsFollowUp { get; set; }

        public ModalityType ModalityType { get; set; }

        public TimeInterval TimeInterval { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyMrtSummary;
    }
}
