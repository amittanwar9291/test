using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum MediastinalVesselsType : byte
	{
		None = 0,

		[RadioReportId("car_m_090208")]
		CoronaryAnomaly = 1,

		[RadioReportId("car_m_090209")]
		Aorta = 2,

		[RadioReportId("car_m_090210")]
		PulmonaryArteries = 3,

		[RadioReportId("car_m_090211")]
		PulmonaryVeins = 4,

		[RadioReportId("car_m_090212")]
		VenaCava = 5
	}
}
