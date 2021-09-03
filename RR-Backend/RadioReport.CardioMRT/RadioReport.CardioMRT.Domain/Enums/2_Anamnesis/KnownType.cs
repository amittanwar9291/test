using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Anamnesis
{
	public enum KnownType : byte
	{
		None = 0,

		[RadioReportId("car_m_020206")]
		OneVessel = 1,

		[RadioReportId("car_m_020207")]
		TwoVessel = 2,

		[RadioReportId("car_m_020208")]
		ThreeVessel = 3

	}
}
