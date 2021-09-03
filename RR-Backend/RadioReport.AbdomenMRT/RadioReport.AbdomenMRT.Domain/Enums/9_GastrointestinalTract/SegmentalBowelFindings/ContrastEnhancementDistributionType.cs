using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum ContrastEnhancementDistributionType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090267", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		Marginal = 1,

		[RadioReportId("abd_m_090268", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		Mucosal = 2,

		[RadioReportId("abd_m_090269", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		EntireWall = 3,

		[RadioReportId("abd_m_090270", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		TargetSign = 4
	}
}