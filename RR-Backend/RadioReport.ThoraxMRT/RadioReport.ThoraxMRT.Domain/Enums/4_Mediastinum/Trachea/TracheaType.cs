using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum TracheaType : byte
	{
		None = 0,

        [RadioReportId("tho_m_040278", InstanceName = nameof(MediastinumFindingType.Trachea))]
        TrachealDeviation = 1,

        [RadioReportId("tho_m_040279", InstanceName = nameof(MediastinumFindingType.Trachea))]
        TrachealStenosis = 2,

        [RadioReportId("tho_m_040280", InstanceName = nameof(MediastinumFindingType.Trachea))]
        Tracheomalacia = 3,

        [RadioReportId("tho_m_040281", InstanceName = nameof(MediastinumFindingType.Trachea))]
        Mass = 4
    }
}
