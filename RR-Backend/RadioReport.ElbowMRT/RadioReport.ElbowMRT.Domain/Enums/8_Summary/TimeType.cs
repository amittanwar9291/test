using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Summary
{
	public enum TimeType : byte
	{
		None = 0,

		[RadioReportId("elb_m_080208")]
		ThreeMonths = 1,

		[RadioReportId("elb_m_080209")]
		FromThreeToSixMonths = 2,

		[RadioReportId("elb_m_080210")]
		FromSixToTwelveMonths = 3,

		[RadioReportId("elb_m_080211")]
		TwelveMonths = 4,

		[RadioReportId("elb_m_080212")]
		FromEighteenToTwentyFourMonths = 5
	}
}
