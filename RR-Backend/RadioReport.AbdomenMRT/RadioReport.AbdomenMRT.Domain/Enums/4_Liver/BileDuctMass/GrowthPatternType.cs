using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum GrowthPatternType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040550", InstanceName = nameof(LiverFindingType.BileDuctMass))]
		Focal = 1,

		[RadioReportId("abd_m_040551", InstanceName = nameof(LiverFindingType.BileDuctMass))]
		Periductal = 2,

		[RadioReportId("abd_m_040552", InstanceName = nameof(LiverFindingType.BileDuctMass))]
		Intraductal = 3,

		[RadioReportId("abd_m_040553", InstanceName = nameof(LiverFindingType.BileDuctMass))]
		SpaceOccupying = 4
	}
}