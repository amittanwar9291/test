using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Summary
{
	public enum FollowUpTime : byte
	{
		None = 0,

		[RadioReportId("car_m_100405")]
		ThreeMonths = 1,

		[RadioReportId("car_m_100406")]
		SixMonths = 2,

		[RadioReportId("car_m_100407")]
		TwelveMonths = 3
	}
}
