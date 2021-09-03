using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Anamnesis
{
    public enum CharacterizationType : byte
    {
        None = 0,

        [RadioReportId("hea_m_020206", InstanceName = nameof(ClinicalSymptomType.Headache))]
        Acute = 1,

        [RadioReportId("hea_m_020207", InstanceName = nameof(ClinicalSymptomType.Headache))]
        Chronic = 2
    }
}