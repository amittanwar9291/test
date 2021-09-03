using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
	public enum FukuokaCriteriaType : byte
	{
		None = 0,

		[RadioReportId("abd_m_060373", InstanceName = nameof(PancreasFindingType.Mass))]
		BelowFiveMm = 1,

		[RadioReportId("abd_m_060374", InstanceName = nameof(PancreasFindingType.Mass))]
		AboveFiveMm = 2
	}
}
