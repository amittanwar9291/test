using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.Spleen
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("abd_c_050405", InstanceName = nameof(SpleenFindingType.Mass))]
		Round = 1,

		[RadioReportId("abd_c_050406", InstanceName = nameof(SpleenFindingType.Mass))]
		Lobulated = 2,

		[RadioReportId("abd_c_050407", InstanceName = nameof(SpleenFindingType.Mass))]
		Irregular = 3,

		[RadioReportId("abd_c_050408", InstanceName = nameof(SpleenFindingType.Mass))]
		Geographic = 4
	}
}
