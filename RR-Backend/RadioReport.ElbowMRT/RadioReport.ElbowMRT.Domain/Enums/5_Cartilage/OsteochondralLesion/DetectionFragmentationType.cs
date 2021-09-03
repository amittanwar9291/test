using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum DetectionFragmentationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050403", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		InSitu = 1,

		[RadioReportId("elb_m_050404", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		Displaced = 2
	}
}
