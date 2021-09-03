using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("car_m_090446")]
		Triangular = 1,

		[RadioReportId("car_m_090447")]
		StringShaped = 2,

		[RadioReportId("car_m_090448")]
		Round = 3
	}
}
