using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum LichtmanStagingType : byte
    {
        None = 0,

        [RadioReportId("han_m_040384", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        StageI = 1,

        [RadioReportId("han_m_040385", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        StageII = 2,

        [RadioReportId("han_m_040386", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        StageIII = 3,

        [RadioReportId("han_m_040387", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        StageIV = 4,
    }
}
