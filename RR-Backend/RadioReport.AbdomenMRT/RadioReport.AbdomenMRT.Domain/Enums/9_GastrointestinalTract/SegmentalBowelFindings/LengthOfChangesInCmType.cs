using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum LengthOfChangesInCmType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090430", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		LessThanFiveCm = 1,

		[RadioReportId("abd_m_090431", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		FiveToTenCm = 2,

		[RadioReportId("abd_m_090432", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		TenToThirtyCm = 3,

		[RadioReportId("abd_m_090433", InstanceName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		Diffuse = 4
	}
}