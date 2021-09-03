using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum ContrastEnhancementType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040450", InstanceName = nameof(MediastinumFindingType.Mass))]
		No = 1,

		[RadioReportId("tho_c_040451", InstanceName = nameof(MediastinumFindingType.Mass))]
		Low = 2,

		[RadioReportId("tho_c_040452",  InstanceName = nameof(MediastinumFindingType.Mass))]
		Powerful = 3
    }
}
