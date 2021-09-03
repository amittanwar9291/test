using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum EpiphysealJointsClassificationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050502", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		Open = 1,

		[RadioReportId("elb_m_050503", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		Closed = 2
	}
}
