using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum LymphNodeStationsType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040312", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        SupraclavicularZone = 1,

		[RadioReportId("tho_c_040313", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        SuperiorMediastinalNodes = 2,

		[RadioReportId("tho_c_040314", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        Aortic = 3,

		[RadioReportId("tho_c_040315", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		InferiorMediastinal = 4,

		[RadioReportId("tho_c_040316", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		HilarLobarAndSegmental = 5

	}
}
