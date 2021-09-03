using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum PostoperativePathogenesisDetailsType : byte
	{
		None = 0,

		[RadioReportId("han_m_070415")]
		IncompletelySplit = 1,

		[RadioReportId("han_m_070416")]
		NerveInjury = 2,

		[RadioReportId("han_m_070418")]
		PerineuralFibrosis = 3
	}
}
