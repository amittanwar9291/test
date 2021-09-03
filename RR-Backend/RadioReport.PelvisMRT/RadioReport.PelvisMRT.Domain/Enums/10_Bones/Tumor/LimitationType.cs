using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum LimitationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_100249", InstanceName =  nameof(BonesFindingType.Tumor))]
        Sharply = 1,

        [RadioReportId("pel_m_100250", InstanceName =  nameof(BonesFindingType.Tumor))]
        Unsharp = 2,

        [RadioReportId("pel_m_100251", InstanceName =  nameof(BonesFindingType.Tumor))]
        BrushLike = 3
    }
}