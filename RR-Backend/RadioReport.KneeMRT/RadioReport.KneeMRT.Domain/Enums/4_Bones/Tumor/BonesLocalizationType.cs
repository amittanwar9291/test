using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum BonesLocalizationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040245", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Epiphyseal = 1,

        [RadioReportId("kne_m_040246", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Metaphyseal = 2,

        [RadioReportId("kne_m_040247", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Diaphyseal = 3
    }
}