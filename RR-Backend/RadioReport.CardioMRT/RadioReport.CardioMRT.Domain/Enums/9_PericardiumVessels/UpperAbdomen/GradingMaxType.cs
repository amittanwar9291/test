using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum GradingMaxType : byte
	{
		None = 0,

		[RadioReportId("car_m_090551")]
		Grade1 = 1,

		[RadioReportId("car_m_090552")]
		Grade2 = 2,

		[RadioReportId("car_m_090553")]
		Grade3 = 3,

		[RadioReportId("car_m_090554")]
		Grade4 = 4
	}
}
