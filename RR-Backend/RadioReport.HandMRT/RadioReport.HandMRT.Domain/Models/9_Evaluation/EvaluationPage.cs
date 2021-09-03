using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HandMRT.Domain.Enums;

namespace RadioReport.HandMRT.Domain.Models
{
    [GeneratedControllerPageModel("HandMRT/Evaluation")]
    public class EvaluationPage : PageModelBase<EvaluationPage>
    {
		public FindingsDynamicsType FindingsDynamicsType { get; set; }

        [RadioReportId("han_m_090107")]
        public bool IsLocalRecurrence { get; set; }

        [RadioReportId("han_m_090202")]
		public bool IsXray { get; set; }

		[RadioReportId("han_m_090203")]
		public bool IsXrayScaphoidQuartet { get; set; }

		[RadioReportId("han_m_090204")]
		public bool IsCT { get; set; }

		[RadioReportId("han_m_090205")]
		public bool IsCTArthrography { get; set; }
        
        [RadioReportId("han_m_090214")]
        public bool IsMRIContrast { get; set; }

        [RadioReportId("han_m_090206")]
		public bool IsMRArthrography { get; set; }

		[RadioReportId("han_m_090207")]
		public bool IsFollowUp { get; set; }

		public FollowUpType FollowUpType { get; set; }
        
        [RadioReportId("han_m_090215")]
        public bool IsBiopsy { get; set; }

        public TClassificationType TClassificationType { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HandMrtEvaluation;
	}
}
