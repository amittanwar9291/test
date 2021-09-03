using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.Tendinopathy
{
	public enum DetailsType : byte
	{
		None = 0,

		[RadioReportId("han_m_060509", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        Acute = 1,

		[RadioReportId("han_m_060510", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        Subacute = 2,

        [RadioReportId("han_m_060511", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        Chronic = 3

    }
}
