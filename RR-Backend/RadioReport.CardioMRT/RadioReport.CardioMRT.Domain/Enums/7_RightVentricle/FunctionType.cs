using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.RightVentricle
{
	public enum FunctionType : byte
	{
		None = 0,

		[RadioReportId("car_m_070302")]
		Dyskinesia = 1,
		
		[RadioReportId("car_m_070303")]
		Hypokinesia = 2,

		[RadioReportId("car_m_070304")]
		Dyssynchrony = 3
	}
}
