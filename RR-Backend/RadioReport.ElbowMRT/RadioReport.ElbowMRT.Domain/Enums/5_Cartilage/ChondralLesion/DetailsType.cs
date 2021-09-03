using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum DetailsType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050411", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		Contusion = 1,

		[RadioReportId("elb_m_050413", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		Delamination = 2,

		[RadioReportId("elb_m_050414", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		CartilageFlap = 3,

		[RadioReportId("elb_m_050415", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		CartilageFlake = 4,

		[RadioReportId("elb_m_050416", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		ChondralFissure = 5
	}
}
