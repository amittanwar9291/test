using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum DirectionType : byte
	{
		None = 0,

		[RadioReportId("elb_m_040226", InstanceName = nameof(BonesFindingType.Luxation))]
		Posteroradial = 1,

		[RadioReportId("elb_m_040227", InstanceName = nameof(BonesFindingType.Luxation))]
		Posterior = 2,

		[RadioReportId("elb_m_040228", InstanceName = nameof(BonesFindingType.Luxation))]
        Ulnar = 3,

		[RadioReportId("elb_m_040229", InstanceName = nameof(BonesFindingType.Luxation))]
		Anterior = 4,

		[RadioReportId("elb_m_040230", InstanceName = nameof(BonesFindingType.Luxation))]
		Divergent = 5
	}
}
