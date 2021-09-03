using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum CharacterizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050302", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		General = 1,

		[RadioReportId("elb_m_050303", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		ItsuboClassification = 2
	}
}
