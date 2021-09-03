using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.Spleen
{
	public enum CMEnhancementDistributionType : byte
	{
		None = 0,

		[RadioReportId("abd_c_050524", InstanceName = nameof(SpleenFindingType.Mass))]
		Peripheral = 1,

		[RadioReportId("abd_c_050525", InstanceName = nameof(SpleenFindingType.Mass))]
		TotalLesion = 2,

		[RadioReportId("abd_c_050526", InstanceName = nameof(SpleenFindingType.Mass))]
		Central = 3,

		[RadioReportId("abd_c_050527", InstanceName = nameof(SpleenFindingType.Mass))]
		Septal = 4
	}
}
