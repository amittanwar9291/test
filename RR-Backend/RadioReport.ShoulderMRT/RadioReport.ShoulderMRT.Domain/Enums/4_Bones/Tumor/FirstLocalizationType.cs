using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FirstLocalizationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0402214", InstanceName = nameof(BonesFindingType.BoneTumor))]
        ProcimalHumerus = 1,

        [RadioReportId("sho_m_0402215", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Clavicle = 2,

        [RadioReportId("sho_m_0402216", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Scapula = 3
    }
}
