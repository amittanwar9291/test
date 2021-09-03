using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum OssLesionBenignType : byte
	{
		None = 0,

		[RadioReportId("car_m_090469")]
		Hemangioma = 1,

		[RadioReportId("car_m_090470")]
		ParaspinalCyst = 2,

		[RadioReportId("car_m_090471")]
		Enostosis = 3
	}
}
