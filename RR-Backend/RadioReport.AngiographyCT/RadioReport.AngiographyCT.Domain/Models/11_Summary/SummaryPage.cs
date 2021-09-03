using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtSummary;

        public ComparisonToPriorExamsType ComparisonToPriorExamsType { get; set; }

        [RadioReportId("ang_c_110202")]
        public bool IsFurtherExamination { get; set; }

        [RadioReportId("ang_c_110203-l", InstanceName = nameof(ModalityTypeFurtherExaminationType), IsExportable = false)]
        public ModalityType ModalityTypeFurtherExaminationType { get; set; }

        [RadioReportId("ang_c_110301")]
        public bool IsFollowUp { get; set; }

        [RadioReportId("ang_c_110302-l", InstanceName = nameof(ModalityTypeFollowUpType), IsExportable = false)]
        public ModalityType ModalityTypeFollowUpType { get; set; }

        public TimeIntervalType TimeIntervalType { get; set; }

    }
}
