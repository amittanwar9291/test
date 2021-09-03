using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum CMEnhancQuantiType : byte
	{
		None = 0,

		[RadioReportId("car_m_090522")]
		Marked = 1,

		[RadioReportId("car_m_090523")]
		Mild = 2,

		[RadioReportId("car_m_090524")]
		No = 3
	}
}
