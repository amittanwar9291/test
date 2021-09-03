using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum PeculiarityType : byte
	{
		None = 0,

		[RadioReportId("car_m_090442")]
		Subsegmental = 1,

		[RadioReportId("car_m_090443")]
		Segmental = 2,

		[RadioReportId("car_m_090444")]
		Lobar = 3
	}
}
