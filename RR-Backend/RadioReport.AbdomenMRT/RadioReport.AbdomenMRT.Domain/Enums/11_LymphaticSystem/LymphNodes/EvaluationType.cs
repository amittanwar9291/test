using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.LymphaticSystem
{
	public enum EvaluationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_110419", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		Pathological = 1,

		[RadioReportId("abd_m_110426", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		BorderlineSized = 2,

		[RadioReportId("abd_m_110429", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		Increased = 3
	}
}