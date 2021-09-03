using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum PulmonaryVariantsType : byte
	{
		None = 0,

		[RadioReportId("car_m_090323")]
		RightAccessoryPulmonaryVein = 1,

		[RadioReportId("car_m_090324")]
		LeftAccessoryPulmonaryVein = 2,

		[RadioReportId("car_m_090325")]
		PartialAnomalousPulmonaryVenous = 3
	}
}
