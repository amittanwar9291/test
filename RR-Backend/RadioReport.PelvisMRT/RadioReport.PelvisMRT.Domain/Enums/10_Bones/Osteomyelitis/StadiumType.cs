using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum StadiumType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100563", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		Acute = 1,

		[RadioReportId("pel_m_100564", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		Chronic = 2
	}
}
