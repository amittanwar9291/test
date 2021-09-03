using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.LymphaticSystem
{
	public enum LocalizationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_110204", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		AffectedLymphNodeStations = 1,

		[RadioReportId("abd_m_110205", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		MultipleLymphNodeInvolvement = 2
	}
}