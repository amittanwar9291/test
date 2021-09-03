using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum InferiorVariantsType : byte
	{
		None = 0,

		[RadioReportId("car_m_090434")]
		LeftVCI = 1,

		[RadioReportId("car_m_090435")]
		DoubledVCI = 2
	}
}
