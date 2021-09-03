using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum InferiorMediastinalNodesType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040413", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        Infracarinal = 1,

        [RadioReportId("tho_c_040414", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		Paraesophageal = 2,

        [RadioReportId("tho_c_040415", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        PulmonaryLigNodesRight = 3,

        [RadioReportId("tho_c_040416", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        PulmonaryLigNodesLeft = 4
    }
}
