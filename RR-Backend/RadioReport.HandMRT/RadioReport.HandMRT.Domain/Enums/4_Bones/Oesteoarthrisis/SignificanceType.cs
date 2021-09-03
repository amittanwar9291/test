using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum SignificanceType : byte
    {
        None = 0,

        [RadioReportId("han_m_040397", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        Minimal = 1,

        [RadioReportId("han_m_0403104", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        Moderate = 2,

        [RadioReportId("han_m_0403105", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        Severe = 3
    }
}
