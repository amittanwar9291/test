using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum DetailsOriginType : byte
	{
		None = 0,

		[RadioReportId("car_m_090402")]
		HighTakeOff = 1,

		[RadioReportId("car_m_090403")]
		MissingLMASeparateOscillators = 2,

		[RadioReportId("car_m_090404")]
		SingularCoronaryArtery = 3,

		[RadioReportId("car_m_090405")]
		RCALeftCoronarySinus = 4,

		[RadioReportId("car_m_090406")]
		RCXOrLADRightCoronarySinus = 5,

		[RadioReportId("car_m_090407")]
		LMARightCoronarySinus = 6
	}
}
