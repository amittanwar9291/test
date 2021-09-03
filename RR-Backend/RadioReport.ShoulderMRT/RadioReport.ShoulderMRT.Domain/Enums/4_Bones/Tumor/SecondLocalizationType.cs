using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum SecondLocalizationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0402220", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Epiphyseal = 1,

        [RadioReportId("sho_m_0402221", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Metaphyseal = 2,

        [RadioReportId("sho_m_0402222", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Diaphyseal = 3

    }
}
