using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum ParatrachealNodesType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040405", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		UpperParatrachealRight = 1,

		[RadioReportId("tho_c_040406", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		UpperParatrachealLeft = 2,

		[RadioReportId("tho_c_040407", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		Prevascular = 3,

		[RadioReportId("tho_c_040408", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		Prevertebral = 4,

		[RadioReportId("tho_c_040409", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		LowerParatrachealRight = 5,

		[RadioReportId("tho_c_040410", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		LowerParatrachealLeft = 6
    }
}
