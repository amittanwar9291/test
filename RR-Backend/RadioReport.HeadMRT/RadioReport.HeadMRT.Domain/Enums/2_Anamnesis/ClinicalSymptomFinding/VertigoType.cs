using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Anamnesis
{
    public enum VertigoType : byte
    {
        None = 0,
        
        [RadioReportId("hea_m_020209", InstanceName = nameof(ClinicalSymptomType.Vertigo))]
        NonSpecificVertigo = 1,

        [RadioReportId("hea_m_020210", InstanceName = nameof(ClinicalSymptomType.Vertigo))]
        RotaryVertigo = 2,

        [RadioReportId("hea_m_020211", InstanceName = nameof(ClinicalSymptomType.Vertigo))]
        StaggeringVertigo = 3,

        [RadioReportId("hea_m_020212", InstanceName = nameof(ClinicalSymptomType.Vertigo))]
        PositionalVertigo = 4,

        [RadioReportId("hea_m_020213", InstanceName = nameof(ClinicalSymptomType.Vertigo))]
        CentralVertigo = 5
    }
}