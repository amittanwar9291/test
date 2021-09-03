using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum FollowUpType : byte
	{
		None = 0,

		[RadioReportId("han_m_090209")]
		ThreeMonths = 1,

		[RadioReportId("han_m_090210")]
		ThreeToSixMonths = 2,

		[RadioReportId("han_m_090211")]
		SixToTwelveMonths = 3,

		[RadioReportId("han_m_090212")]
		TwelveMonths = 4,

		[RadioReportId("han_m_090213")]
		EighteenToTwentyFourMonths = 5

	}
}
