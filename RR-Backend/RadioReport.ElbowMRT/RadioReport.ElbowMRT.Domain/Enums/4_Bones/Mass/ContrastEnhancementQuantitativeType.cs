using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum ContrastEnhancementQuantitativeType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0404159", InstanceName = nameof(BonesFindingType.Mass))]
        No = 1,

		[RadioReportId("elb_m_0404160", InstanceName = nameof(BonesFindingType.Mass))]
		Low = 2,

		[RadioReportId("elb_m_0404161", InstanceName = nameof(BonesFindingType.Mass))]
		Powerful = 3
	}
}
