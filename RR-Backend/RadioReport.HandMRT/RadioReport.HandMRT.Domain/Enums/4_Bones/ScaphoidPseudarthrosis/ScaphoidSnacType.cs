using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum ScaphoidSnacType : byte
    {
        None = 0,

        [RadioReportId("han_m_0404112", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
        StageI = 1,

        [RadioReportId("han_m_0404113", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
        StageII = 2,

        [RadioReportId("han_m_0404114", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
        StageIII = 3
    }
}
