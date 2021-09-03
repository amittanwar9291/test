using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Anamnesis
{
	public enum StatusType : byte
	{
		None = 0,

		[RadioReportId("car_m_020204")]
		SuspicionOf = 1,

		[RadioReportId("car_m_020205")]
		Known = 2

	}
}
