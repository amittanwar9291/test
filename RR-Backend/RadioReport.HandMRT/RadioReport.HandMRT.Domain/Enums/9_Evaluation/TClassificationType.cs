using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum TClassificationType : byte
	{
		None = 0,

		[RadioReportId("han_m_090303")]
        T1LowerOrEqual8CmInLargestExtension = 1,

		[RadioReportId("han_m_090304")]
        T2HigherThan8CmInLargestExtension = 2,

		[RadioReportId("han_m_090305")]
        T3DiscontinuousSpread = 3

	}
}
