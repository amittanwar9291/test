using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums
{
	public enum ParityType : byte
	{
		None = 0,

		[RadioReportId("pel_m_020402")]
        Nullipara = 1,

		[RadioReportId("pel_m_020403")]
		Primipara = 2,

		[RadioReportId("pel_m_020404")]
		Bipara = 3,

		[RadioReportId("pel_m_020405")]
		Multipara = 4

	}
}
