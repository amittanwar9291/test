using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum OlfactoryNerveDetailsType : byte
    {
        None = 0,

        [RadioReportId("hea_c_020259", InstanceName = nameof(ClinicalSymptomType.CranialNerves))]
        Parosmia = 1,

        [RadioReportId("hea_c_020260", InstanceName = nameof(ClinicalSymptomType.CranialNerves))]
        Anosmia = 2
    }
}