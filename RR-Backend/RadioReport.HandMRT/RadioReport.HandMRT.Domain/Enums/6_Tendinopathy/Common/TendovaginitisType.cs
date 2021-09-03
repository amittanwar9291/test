using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.Tendinopathy
{
	public enum TendovaginitisType : byte
	{
        None = 0,

        [RadioReportId("han_m_060406", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060422", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        EffusionInTendonSheath = 1,

        [RadioReportId("han_m_060405", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060421", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        ChronicStenosingTenosynovitis = 2,

        [RadioReportId("han_m_060407", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060423", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        TendonSheathAbscess = 3,

    }
}
