using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum CapsuleType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050218", InstanceName = nameof(CartilageFindingType.Capsule))]
		CapsuleRupture = 1,

		[RadioReportId("elb_m_050219", InstanceName = nameof(CartilageFindingType.Capsule))]
		PlicaSyndrome = 2,

		[RadioReportId("elb_m_050220", InstanceName = nameof(CartilageFindingType.Capsule))]
		Arthritis = 3
	}
}
