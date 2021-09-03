using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum FacialNervePalsyDetailsType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0202112", InstanceName = nameof(ClinicalSymptomType.CranialNerves))]
        Central = 1,

        [RadioReportId("hea_c_0202113", InstanceName = nameof(ClinicalSymptomType.CranialNerves))]
        Peripheral = 2
    }
}