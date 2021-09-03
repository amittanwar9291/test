using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum HilarLobarNodesType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040416", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        HilarLymphNodes = 1,

        [RadioReportId("tho_m_040417", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        InterlobarLN = 2,

        [RadioReportId("tho_m_040418", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		LobarNode = 3,

        [RadioReportId("tho_m_040419", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		SegmentalNode = 4,

        [RadioReportId("tho_m_040420", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		SubsegmentalNode = 5
    }
}
