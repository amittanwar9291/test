using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum OssLesionLocalizationType : byte
	{
		None = 0,

		[RadioReportId("car_m_0902167")]
		Humerus = 1,

		[RadioReportId("car_m_0902168")]
		Cavicula = 2,

		[RadioReportId("car_m_0902169")]
		Sternum = 3,

		[RadioReportId("car_m_0902170")]
		Ribs = 4,

		[RadioReportId("car_m_0902171")]
		VertebralBody = 5
	}
}
