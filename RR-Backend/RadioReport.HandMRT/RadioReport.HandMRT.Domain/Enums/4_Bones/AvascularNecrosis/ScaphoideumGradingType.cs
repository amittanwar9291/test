using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum ScaphoideumGradingType : byte
    {
        None = 0,

        [RadioReportId("han_m_0403235", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        Complete = 1,

        [RadioReportId("han_m_0403236", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        Partial = 2,
    }
}
