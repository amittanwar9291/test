using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum MediastinumLimitationType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040440", InstanceName = nameof(MediastinumFindingType.Mass))]
        WellDefined = 1,

		[RadioReportId("tho_c_040441", InstanceName = nameof(MediastinumFindingType.Mass))]
        IllDefined = 2
    }
}
