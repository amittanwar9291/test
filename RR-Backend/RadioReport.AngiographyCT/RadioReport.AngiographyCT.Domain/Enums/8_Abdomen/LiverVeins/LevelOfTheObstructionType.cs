using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
	public enum LevelOfTheObstructionType : byte
	{
		None = 0,

		[RadioReportId("ang_c_0803161", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        SuprahepaticVCavaInferior = 1,

		[RadioReportId("ang_c_0803162", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        HepaticVeinStar = 2,

        [RadioReportId("ang_c_0803157", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        LiverVeins = 3,

        [RadioReportId("ang_c_0803163", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        VenulesWithinThePortalField = 4
	}
}
