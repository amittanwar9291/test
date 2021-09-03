using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum CMEnhancementDistributionType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0404227", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Peripheral = 1,

        [RadioReportId("sho_m_0404228", InstanceName = nameof(BonesFindingType.BoneTumor))]
        WithinTheEntireLesionOrMass = 2,

        [RadioReportId("sho_m_0404229", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Central = 3,

        [RadioReportId("sho_m_0404230", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Septal = 4,

        [RadioReportId("sho_m_0404231", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Nidus = 5

    }
}
