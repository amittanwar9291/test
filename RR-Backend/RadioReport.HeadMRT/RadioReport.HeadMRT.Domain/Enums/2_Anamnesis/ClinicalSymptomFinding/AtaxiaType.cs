using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Anamnesis
{
    public enum AtaxiaType : byte
    {
        None = 0,

        [RadioReportId("hea_m_020273", InstanceName = nameof(ClinicalSymptomType.Ataxia))]
        CerebellarAtaxia = 1,

        [RadioReportId("hea_m_020274", InstanceName = nameof(ClinicalSymptomType.Ataxia))]
        GaitDisorder = 2,

        [RadioReportId("hea_m_020275", InstanceName = nameof(ClinicalSymptomType.Ataxia))]
        TruncalAtaxia = 3
    }
}