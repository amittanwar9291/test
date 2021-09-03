using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum EatonLitterStagingType : byte
    {
        None = 0,

        [RadioReportId("han_m_040573", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        StageI = 1,

        [RadioReportId("han_m_040574", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        StageII = 2,

        [RadioReportId("han_m_040575", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        StageIII = 3,

        [RadioReportId("han_m_040572", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        StageIV = 4
    }
}
