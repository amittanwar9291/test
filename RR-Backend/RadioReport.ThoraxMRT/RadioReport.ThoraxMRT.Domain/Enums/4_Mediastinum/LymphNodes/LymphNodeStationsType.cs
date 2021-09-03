using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum LymphNodeStationsType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040309", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        SupraclavicularZone = 1,

		[RadioReportId("tho_m_040310", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        SuperiorMediastinalNodes = 2,

		[RadioReportId("tho_m_040311", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        Aortic = 3,

		[RadioReportId("tho_m_040312", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		InferiorMediastinal = 4,

		[RadioReportId("tho_m_040313", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		HilarLobarAndSegmental = 5

	}
}
