using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum ContrastEnhancementQuantitativeType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090513", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090261", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0905100", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		No = 1,

		[RadioReportId("abd_m_090514", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090262", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0905101", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Low = 2,

		[RadioReportId("abd_m_090515", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090263", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0905102", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Strong = 3
	}
}