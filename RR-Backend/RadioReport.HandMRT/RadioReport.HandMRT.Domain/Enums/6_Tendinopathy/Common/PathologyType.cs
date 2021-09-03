using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.Tendinopathy
{
	public enum PathologyType : byte
	{
		None = 0,

        [RadioReportId("han_m_060402", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060418", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        Tendinitis = 1,

        [RadioReportId("han_m_060404", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060420", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        Tendovaginitis = 2, 

        [RadioReportId("han_m_060411", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060427", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        Rupture = 3
    }
}
