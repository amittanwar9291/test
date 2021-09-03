using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum LimitationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040249", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Sharply = 1,

        [RadioReportId("kne_m_040250", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Unsharp = 2,

        [RadioReportId("kne_m_040251", InstanceName = nameof(BonesFindingType.BonesTumor))]
        BrushLike = 3
    }
}