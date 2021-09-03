using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum HistologyKnownType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090206", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090206", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Benign = 1,

		[RadioReportId("abd_m_090207", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090207", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Malignant = 2
	}
}