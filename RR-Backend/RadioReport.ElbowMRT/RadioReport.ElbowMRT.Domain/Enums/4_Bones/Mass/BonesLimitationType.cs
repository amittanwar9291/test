using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum BonesLimitationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0402158", InstanceName = nameof(BonesFindingType.Mass))]
        WellDefined = 1,

		[RadioReportId("elb_m_0402159", InstanceName = nameof(BonesFindingType.Mass))]
        IllDefined = 2,

		[RadioReportId("elb_m_0402160", InstanceName = nameof(BonesFindingType.Mass))]
        Mixed = 3
	}
}
