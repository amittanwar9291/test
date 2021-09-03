using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum CharacteristicsType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090470", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		Solitaire = 1,

		[RadioReportId("abd_m_090471", InstanceName = nameof(GastrointestinalTractFindingType.BowelDiverticula))]
		Multiple = 2
	}
}