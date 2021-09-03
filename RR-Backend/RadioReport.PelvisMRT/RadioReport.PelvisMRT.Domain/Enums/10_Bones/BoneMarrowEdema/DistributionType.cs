using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum DistributionType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100344", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		Subchondral = 1,

		[RadioReportId("pel_m_100345", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		Circumscribed = 2,

		[RadioReportId("pel_m_100346", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		Diffuse = 3
	}
}
