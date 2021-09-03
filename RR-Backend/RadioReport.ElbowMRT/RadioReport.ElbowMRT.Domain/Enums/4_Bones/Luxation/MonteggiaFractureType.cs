using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum MonteggiaFractureType : byte
	{
		None = 0,

		[RadioReportId("elb_m_040427", InstanceName = nameof(BonesFindingType.Luxation))]
		TypeA = 1,

		[RadioReportId("elb_m_040428", InstanceName = nameof(BonesFindingType.Luxation))]
		TypeB = 2,

		[RadioReportId("elb_m_040429", InstanceName = nameof(BonesFindingType.Luxation))]
		TypeC = 3,

		[RadioReportId("elb_m_040430", InstanceName = nameof(BonesFindingType.Luxation))]
		TypeD = 4
	}
}
