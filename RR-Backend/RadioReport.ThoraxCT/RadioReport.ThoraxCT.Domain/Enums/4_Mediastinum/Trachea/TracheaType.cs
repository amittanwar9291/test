using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum TracheaType : byte
	{
		None = 0,

        [RadioReportId("tho_c_040292", InstanceName = nameof(MediastinumFindingType.Trachea))]
        TrachealDeviation = 1,

        [RadioReportId("tho_c_040293", InstanceName = nameof(MediastinumFindingType.Trachea))]
        TrachealStenosis = 2,

        [RadioReportId("tho_c_040294", InstanceName = nameof(MediastinumFindingType.Trachea))]
        Tracheomalacia = 3,

        [RadioReportId("tho_c_040295", InstanceName = nameof(MediastinumFindingType.Trachea))]
        Mass = 4
    }
}
