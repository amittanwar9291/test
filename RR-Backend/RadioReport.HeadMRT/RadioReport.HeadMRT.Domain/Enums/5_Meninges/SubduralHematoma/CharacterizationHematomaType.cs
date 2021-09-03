using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Meninges
{
    public enum CharacterizationHematomaType : byte
    {
        None = 0,

        [RadioReportId("hea_m_050459", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        Acute = 1,

        [RadioReportId("hea_m_050460", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        Subacute = 2,

        [RadioReportId("hea_m_050461", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        Chronic = 3,

        [RadioReportId("hea_m_050462", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        OlderWithFreshParts = 4
    }
}