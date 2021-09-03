using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum ContrastEnhancementDistributionType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0404188", InstanceName = nameof(BonesFindingType.Mass))]
        Peripheral = 1,

		[RadioReportId("elb_m_0404189", InstanceName = nameof(BonesFindingType.Mass))]
		Central = 2,

		[RadioReportId("elb_m_0404190", InstanceName = nameof(BonesFindingType.Mass))]
        EntireLesion = 3,

		[RadioReportId("elb_m_0404191", InstanceName = nameof(BonesFindingType.Mass))]
		Septal = 4,

		[RadioReportId("elb_m_0404192", InstanceName = nameof(BonesFindingType.Mass))]
		Nidus = 5
	}
}
