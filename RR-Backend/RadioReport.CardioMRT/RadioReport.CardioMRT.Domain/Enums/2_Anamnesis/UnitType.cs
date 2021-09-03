using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Anamnesis
{
	public enum UnitType : byte
	{
		None = 0,

		[RadioReportId("car_m_020114")]
		Mgdl = 1,

		[RadioReportId("car_m_020115")]
		Mmoll = 2
	}
}
