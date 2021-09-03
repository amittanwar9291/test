using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum TopMediastinalNodesType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040402", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        Right = 1,

		[RadioReportId("tho_c_040403", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        Left = 2
	}
}
