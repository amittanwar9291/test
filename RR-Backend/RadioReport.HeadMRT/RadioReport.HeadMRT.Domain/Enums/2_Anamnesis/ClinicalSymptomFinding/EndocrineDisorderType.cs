using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Anamnesis
{
    public enum EndocrineDisorderType : byte
    {
        None = 0,

        [RadioReportId("hea_m_0202107", InstanceName = nameof(ClinicalSymptomType.EndocrineDisorder))]
        Hyperprolactinemia = 1,

        [RadioReportId("hea_m_0202108", InstanceName = nameof(ClinicalSymptomType.EndocrineDisorder))]
        CentralCushingsSyndrome = 2,

        [RadioReportId("hea_m_0202109", InstanceName = nameof(ClinicalSymptomType.EndocrineDisorder))]
        CentralDiabetesInsipidus = 3
    }
}