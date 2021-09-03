using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.RightVentricle
{
	public enum FindingType : byte
	{
		None = 0,

		[RadioReportId("car_m_070104")]
		NormalFormAndFunction = 1,

		[RadioReportId("car_m_070105")]
		NoData = 2,

		[RadioReportId("car_m_070106")]
		Finding = 3
	}
}
