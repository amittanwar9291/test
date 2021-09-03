using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum DistributionType : byte
	{
		None = 0,

		[RadioReportId("elb_m_040218", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		Subchondral = 1,

		[RadioReportId("elb_m_040219", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		Circumscribed = 2,

		[RadioReportId("elb_m_040220", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		Diffuse = 3
	}
}
