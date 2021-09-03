using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HipMRT.Domain.Enums;

namespace RadioReport.HipMRT.Domain.Models
{
    [GeneratedControllerPageModel("HipMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        public FindingsDynamicsType FindingsDynamicsType { get; set; }

        [RadioReportId("hip_m_090203")]
        public bool IsXRay { get; set; }

        [RadioReportId("hip_m_090204")]
        public bool IsCT { get; set; }

        [RadioReportId("hip_m_090205")]
        public bool IsAngiography { get; set; }

        [RadioReportId("hip_m_090206")]
        public bool IsMRIPelvis { get; set; }

        [RadioReportId("hip_m_090207")]
        public bool IsMRIAngiography { get; set; }

        [RadioReportId("hip_m_090208")]
        public bool IsMRIKnee { get; set; }

        [RadioReportId("hip_m_090209")]
        public bool IsFollowUp { get; set; }

        public DateMonthType DateMonthType { get; set; }

        [RadioReportId("hip_m_090216")]
        public bool IsBiopsy { get; set; }

        public TClassificationType TClassificationType { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HipMrtSummary;
    }
}
