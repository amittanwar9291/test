using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum AtaxiaType : byte
    {
        None = 0,

        [RadioReportId("hea_c_020273", InstanceName = nameof(ClinicalSymptomType.Ataxia))]
        CerebellarAtaxia = 1,

        [RadioReportId("hea_c_020274", InstanceName = nameof(ClinicalSymptomType.Ataxia))]
        GaitDisorder = 2,

        [RadioReportId("hea_c_020275", InstanceName = nameof(ClinicalSymptomType.Ataxia))]
        TruncalAtaxia = 3
    }
}