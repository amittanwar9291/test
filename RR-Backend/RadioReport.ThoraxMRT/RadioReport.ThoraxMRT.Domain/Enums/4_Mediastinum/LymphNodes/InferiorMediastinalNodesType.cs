using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum InferiorMediastinalNodesType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040412", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        Infracarinal = 1,

        [RadioReportId("tho_m_040413", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		Paraesophageal = 2,

        [RadioReportId("tho_m_040414", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        PulmonaryLigNodesRight = 3,

        [RadioReportId("tho_m_040415", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        PulmonaryLigNodesLeft = 4
    }
}
