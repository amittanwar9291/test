using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum ScaphoideumClassificationType : byte
    {
        None = 0,

        [RadioReportId("han_m_040389", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        EdematousChanges = 1,

        [RadioReportId("han_m_040390", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        ChangedShape = 2,

        [RadioReportId("han_m_040391", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        GeneralDecrease = 3,

        [RadioReportId("han_m_040392", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        Fragmentation = 4,

    }
}
