using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum ContrastEnhancementDistributionType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0404119", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Peripheral = 1,

        [RadioReportId("kne_m_0404120", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Central = 2,

        [RadioReportId("kne_m_0404121", InstanceName = nameof(BonesFindingType.BonesTumor))]
        EntireLesion = 3,

        [RadioReportId("kne_m_0404122", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Septal = 4,

        [RadioReportId("kne_m_0404123", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Nidus = 5
    }
}