using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Spleen
{
	public enum QuantityType : byte
	{
		None = 0,

		[RadioReportId("abd_m_050308", InstanceName = nameof(SpleenFindingType.Mass))]
		Solitaire = 1,

		[RadioReportId("abd_m_050309", InstanceName = nameof(SpleenFindingType.Mass))]
		Multilocular = 2
	}
}
