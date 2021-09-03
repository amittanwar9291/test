using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum MediastinumGrowthPatternsType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040473", InstanceName = nameof(MediastinumFindingType.Mass))]
		NoDisplacement = 1,

		[RadioReportId("tho_m_040474", InstanceName = nameof(MediastinumFindingType.Mass))]
        ContinuationOfTheOrthotopicThyroidGland = 2,

		[RadioReportId("tho_m_040475", InstanceName = nameof(MediastinumFindingType.Mass))]
        RightSideCloseToCarina = 3,

		[RadioReportId("tho_m_040476", InstanceName = nameof(MediastinumFindingType.Mass))]
		DumbbellShaped = 4,

		[RadioReportId("tho_m_040477", InstanceName = nameof(MediastinumFindingType.Mass))]
		Infiltration = 5
    }
}

