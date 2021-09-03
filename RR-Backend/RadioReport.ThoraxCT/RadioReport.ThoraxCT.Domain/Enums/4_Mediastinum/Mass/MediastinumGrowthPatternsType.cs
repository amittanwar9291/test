using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum MediastinumGrowthPatternsType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040266", InstanceName = nameof(MediastinumFindingType.Mass))]
		NoDisplacement = 1,

		[RadioReportId("tho_c_040267", InstanceName = nameof(MediastinumFindingType.Mass))]
        ContinuationOfTheOrthotopicThyroidGland = 2,

		[RadioReportId("tho_c_040268", InstanceName = nameof(MediastinumFindingType.Mass))]
        RightSideCloseToCarina = 3,

		[RadioReportId("tho_c_040269", InstanceName = nameof(MediastinumFindingType.Mass))]
		DumbbellShaped = 4,

		[RadioReportId("tho_c_040270", InstanceName = nameof(MediastinumFindingType.Mass))]
		Infiltration = 5
    }
}
