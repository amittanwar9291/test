using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Enums;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    [GeneratedControllerPageModel("ShoulderMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
	{
		[RadioReportId("sho_m_090104")]
		public bool IsXray { get; set; }

		[RadioReportId("sho_m_090105")]
		public bool IsCT { get; set; }

		[RadioReportId("sho_m_090106")]
		public bool IsFollowup { get; set; }

		public FollowUpTimeType FollowUpTimeType { get; set; }

		[RadioReportId("sho_m_090113")]
		public bool IsBiopsy { get; set; }

		public FindingsDynamicsType FindingsDynamicsType { get; set; }

		public override string PageTypeName => PageTypeNames.ShoulderMrtSummary;
	}
}
