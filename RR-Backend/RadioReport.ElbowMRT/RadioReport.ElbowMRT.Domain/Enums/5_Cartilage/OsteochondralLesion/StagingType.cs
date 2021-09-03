using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum StagingType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0504107", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		Stage1 = 1,

		[RadioReportId("elb_m_0504108", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		Stage2 = 2,

		[RadioReportId("elb_m_050407", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		Stage3 = 3,

		[RadioReportId("elb_m_050408", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		Stage4 = 4,

		[RadioReportId("elb_m_050409", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		Stage5 = 5
	}
}
