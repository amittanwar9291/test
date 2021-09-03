using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Anamnesis
{
    public enum DisorderOfConsciousnessType : byte
    {
        None = 0,

        [RadioReportId("hea_m_020228", InstanceName = nameof(ClinicalSymptomType.DisordersOfConsciousness))]
        Somnolence = 1,

        [RadioReportId("hea_m_020229", InstanceName = nameof(ClinicalSymptomType.DisordersOfConsciousness))]
        Sopor = 2,

        [RadioReportId("hea_m_020230", InstanceName = nameof(ClinicalSymptomType.DisordersOfConsciousness))]
        Coma = 3,

        [RadioReportId("hea_m_020231", InstanceName = nameof(ClinicalSymptomType.DisordersOfConsciousness))]
        Delirium = 4,

        [RadioReportId("hea_m_020232", InstanceName = nameof(ClinicalSymptomType.DisordersOfConsciousness))]
        Agitation = 5
    }
}