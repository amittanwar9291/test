using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum VenaCavaType : byte
	{
		None = 0,

		[RadioReportId("car_m_090329")]
		Superior = 1,

		[RadioReportId("car_m_090330")]
		Inferior = 2
	}
}
