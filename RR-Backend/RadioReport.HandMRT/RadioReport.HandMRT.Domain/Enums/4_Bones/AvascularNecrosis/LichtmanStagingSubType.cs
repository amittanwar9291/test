using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum LichtmanStagingSubType : byte
    {
        None = 0,

        [RadioReportId("han_m_0403238", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        StageIIIA = 1,

        [RadioReportId("han_m_0403239", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        StageIIIB = 2,

        [RadioReportId("han_m_0403240", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        StageIIIC = 3,
    }
}
