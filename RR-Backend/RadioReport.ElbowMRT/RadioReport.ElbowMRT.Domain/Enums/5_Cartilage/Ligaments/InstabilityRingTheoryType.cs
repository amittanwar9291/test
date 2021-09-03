using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum InstabilityRingTheoryType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050330", InstanceName = nameof(CartilageFindingType.Ligaments))]
		Stage1 = 1,

		[RadioReportId("elb_m_050331", InstanceName = nameof(CartilageFindingType.Ligaments))]
		Stage2 = 2,

		[RadioReportId("elb_m_050332", InstanceName = nameof(CartilageFindingType.Ligaments))]
		Stage3A = 3,

		[RadioReportId("elb_m_050333", InstanceName = nameof(CartilageFindingType.Ligaments))]
		Stage3B = 4,

		[RadioReportId("elb_m_050334", InstanceName = nameof(CartilageFindingType.Ligaments))]
		Stage3C = 5
	}
}
