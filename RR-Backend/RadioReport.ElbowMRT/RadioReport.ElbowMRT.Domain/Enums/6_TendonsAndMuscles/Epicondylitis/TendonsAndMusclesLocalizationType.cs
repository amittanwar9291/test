using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum TendonsAndMusclesLocalizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_060203")]
		LateralEpicondylitis = 1,

		[RadioReportId("elb_m_060205")]
		MedialEpicondylitis = 2
	}
}
