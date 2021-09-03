using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum FindingsDynamicsType : byte
	{
		None = 0,

		[RadioReportId("han_m_090104")]
		Deterioration = 1,

		[RadioReportId("han_m_090105")]
		NoChange = 2,

		[RadioReportId("han_m_090106")]
		Improvement = 3

	}
}
