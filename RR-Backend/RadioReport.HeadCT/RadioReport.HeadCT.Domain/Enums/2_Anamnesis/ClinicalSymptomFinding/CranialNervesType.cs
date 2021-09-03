using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum CranialNervesType : byte
    {
        None = 0,

        [RadioReportId("hea_c_020254", InstanceName = nameof(ClinicalSymptomType.CranialNerves))]
        OlfactoryNerve = 1,

        [RadioReportId("hea_c_020255", InstanceName = nameof(ClinicalSymptomType.CranialNerves))]
        TrigeminalNeuralgia = 2,

        [RadioReportId("hea_c_020256", InstanceName = nameof(ClinicalSymptomType.CranialNerves))]
        FacialNervePalsy = 3,

        [RadioReportId("hea_c_020257", InstanceName = nameof(ClinicalSymptomType.CranialNerves))]
        VestibularNeuritis = 4
    }
}