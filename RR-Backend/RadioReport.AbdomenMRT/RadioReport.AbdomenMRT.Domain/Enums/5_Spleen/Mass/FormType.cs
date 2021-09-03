using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Spleen
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("abd_m_050405", InstanceName = nameof(SpleenFindingType.Mass))]
		Round = 1,

		[RadioReportId("abd_m_050406", InstanceName = nameof(SpleenFindingType.Mass))]
		Lobulated = 2,

		[RadioReportId("abd_m_050407", InstanceName = nameof(SpleenFindingType.Mass))]
		Irregular = 3,

		[RadioReportId("abd_m_050408", InstanceName = nameof(SpleenFindingType.Mass))]
		Geographic = 4
	}
}
