using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum CentralEndocrineDisorderType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0202107", InstanceName = nameof(ClinicalSymptomType.CentralEndocrineDisorder))]
        Hyperprolactinemia = 1,

        [RadioReportId("hea_c_0202108", InstanceName = nameof(ClinicalSymptomType.CentralEndocrineDisorder))]
        CentralCushingsSyndrome = 2,

        [RadioReportId("hea_c_0202109", InstanceName = nameof(ClinicalSymptomType.CentralEndocrineDisorder))]
        CentralDiabetesInsipidus = 3
    }
}