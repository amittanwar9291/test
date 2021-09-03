using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.AdrenalGlands
{
	public enum GrowthPatternsType : byte
	{
		None = 0,

		[RadioReportId("abd_m_080313", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		DisplacingGrowth = 1,

		[RadioReportId("abd_m_080314", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		Infiltration = 2
	}
}