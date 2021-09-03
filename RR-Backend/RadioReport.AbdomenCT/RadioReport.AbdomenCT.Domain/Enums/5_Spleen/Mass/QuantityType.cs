using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.Spleen
{
	public enum QuantityType : byte
	{
		None = 0,

		[RadioReportId("abd_c_050308", InstanceName = nameof(SpleenFindingType.Mass))]
		Solitaire = 1,

		[RadioReportId("abd_c_050309", InstanceName = nameof(SpleenFindingType.Mass))]
		Multilocular = 2
	}
}
