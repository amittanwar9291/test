using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum EpiphysealJointsType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040483", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
		OpenJuvenileType = 1,

		[RadioReportId("anc_m_040484", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
		ClosedAdultType = 2
    }
}
