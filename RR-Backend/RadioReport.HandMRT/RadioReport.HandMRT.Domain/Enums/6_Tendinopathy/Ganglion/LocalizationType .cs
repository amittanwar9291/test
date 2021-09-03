using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.Tendinopathy
{
    public enum LocalizationType : byte
    {
        None = 0,

        [RadioReportId("han_m_060228", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        FlexorTendons = 1,

        [RadioReportId("han_m_060229", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        ExtensorTendons = 2

    }
}
