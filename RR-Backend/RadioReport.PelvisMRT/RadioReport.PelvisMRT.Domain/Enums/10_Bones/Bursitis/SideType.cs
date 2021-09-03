using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum SideType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100212", InstanceName = nameof(BonesFindingType.Bursitis))]
		Right = 1,

		[RadioReportId("pel_m_100213", InstanceName = nameof(BonesFindingType.Bursitis))]
		Left = 2
	}
}
