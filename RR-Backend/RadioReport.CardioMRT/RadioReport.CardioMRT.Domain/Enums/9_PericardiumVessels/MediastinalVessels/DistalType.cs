using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum DistalType : byte
	{
		None = 0,

		[RadioReportId("car_m_090409")]
		MyocardialBridge = 1,

		[RadioReportId("car_m_090410")]
		EctasiaAneurysm = 2
	}
}
