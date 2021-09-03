using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum CorticalisType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0402165", InstanceName = nameof(BonesFindingType.Mass))]
		Intact = 1,

		[RadioReportId("elb_m_0402166", InstanceName = nameof(BonesFindingType.Mass))]
        ThinningScalopping = 2,

		[RadioReportId("elb_m_0402167", InstanceName = nameof(BonesFindingType.Mass))]
		Destruction = 3,

		[RadioReportId("elb_m_0402168", InstanceName = nameof(BonesFindingType.Mass))]
        Neocorticalis = 4
	}
}
