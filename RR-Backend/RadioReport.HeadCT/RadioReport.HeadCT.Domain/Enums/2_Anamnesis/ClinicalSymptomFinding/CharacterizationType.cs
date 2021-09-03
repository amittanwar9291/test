using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum CharacterizationType : byte
    {
        None = 0,

        [RadioReportId("hea_c_020206", InstanceName = nameof(ClinicalSymptomType.Headache))]
        Acute = 1,

        [RadioReportId("hea_c_020207", InstanceName = nameof(ClinicalSymptomType.Headache))]
        Chronic = 2
    }
}