using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Spleen
{
	public enum CMEnhancementDistributionType : byte
	{
		None = 0,

		[RadioReportId("abd_m_050322", InstanceName = nameof(SpleenFindingType.Mass))]
		Peripheral = 1,

		[RadioReportId("abd_m_050323", InstanceName = nameof(SpleenFindingType.Mass))]
		TotalLesion = 2,

		[RadioReportId("abd_m_050324", InstanceName = nameof(SpleenFindingType.Mass))]
		Central = 3,

		[RadioReportId("abd_m_050325", InstanceName = nameof(SpleenFindingType.Mass))]
		Septal = 4
	}
}
