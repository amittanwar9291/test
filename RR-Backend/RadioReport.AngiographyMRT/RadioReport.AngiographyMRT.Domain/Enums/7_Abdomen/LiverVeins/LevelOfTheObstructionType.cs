using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum LevelOfTheObstructionType : byte
	{
		None = 0,

		[RadioReportId("ang_m_0703161", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        SuprahepaticVCavaInferior = 1,

		[RadioReportId("ang_m_0703162", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        HepaticVeinStar = 2,

        [RadioReportId("ang_m_0703157", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        LiverVeins = 3,

        [RadioReportId("ang_m_0703163", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        VenulesWithinThePortalField = 4
	}
}
