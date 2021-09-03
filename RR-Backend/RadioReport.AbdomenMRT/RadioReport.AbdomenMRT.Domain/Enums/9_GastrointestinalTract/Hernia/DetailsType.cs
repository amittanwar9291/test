using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum DetailsType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0904103", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		ObturatorHernia = 1,

		[RadioReportId("abd_m_0904104", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		SciaticHernia = 2,

		[RadioReportId("abd_m_0904105", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		PerinealHernia = 3
	}
}