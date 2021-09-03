using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Meninges
{
    public enum CharacterizationHematomaType : byte
    {
        None = 0,

        [RadioReportId("hea_c_050459", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        Acute = 1,

        [RadioReportId("hea_c_050460", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        Subacute = 2,

        [RadioReportId("hea_c_050461", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        Chronic = 3,

        [RadioReportId("hea_c_050462", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        AcuteOnChronic = 4
    }
}
