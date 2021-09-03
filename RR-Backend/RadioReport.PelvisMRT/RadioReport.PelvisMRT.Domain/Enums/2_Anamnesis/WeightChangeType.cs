using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums
{
	public enum WeightChangeType : byte
	{
		None = 0,

		[RadioReportId("pel_m_020505")]
		Gain = 1,

		[RadioReportId("pel_m_020506")]
		Loss = 2
	}
}
