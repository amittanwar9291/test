using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum PerforationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0904117", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_0902115", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		Free = 1,

		[RadioReportId("abd_m_0904118", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		[RadioReportId("abd_m_0902116", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		Contained = 2
	}
}