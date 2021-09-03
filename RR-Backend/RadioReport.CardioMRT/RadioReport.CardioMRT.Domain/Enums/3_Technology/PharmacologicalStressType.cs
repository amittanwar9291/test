using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Technology
{
	public enum PharmacologicalStressType : byte
	{
		None = 0,

		[RadioReportId("car_m_030502")]
		AdenosineInfusion = 1,

		[RadioReportId("car_m_030503")]
		RegadenosonInjection = 2,

		[RadioReportId("car_m_030504")]
		DobutamineInfusion = 3
	}
}
