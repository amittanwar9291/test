using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum ClassificationSubType : byte
	{
		None = 0,

        [RadioReportId("elb_m_050504", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
        JuvenileType = 1,

        [RadioReportId("elb_m_050505", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
        MPanner = 2,

        [RadioReportId("elb_m_050506", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
        AdultType = 3
    }
}
