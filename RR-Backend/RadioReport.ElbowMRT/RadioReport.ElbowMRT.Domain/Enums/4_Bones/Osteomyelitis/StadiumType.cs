using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum StadiumType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0405131", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		Acute = 1,

		[RadioReportId("elb_m_0405132", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		Chronic = 2
	}
}
