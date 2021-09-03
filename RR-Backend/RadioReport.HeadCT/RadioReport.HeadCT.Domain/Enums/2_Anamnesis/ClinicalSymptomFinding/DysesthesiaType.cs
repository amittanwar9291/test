using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum DysesthesiaType : byte
    {
        None = 0,

        [RadioReportId("hea_c_020266", InstanceName = nameof(ClinicalSymptomType.Dysesthesia))]
        Paresthesia = 1,

        [RadioReportId("hea_c_020267", InstanceName = nameof(ClinicalSymptomType.Dysesthesia))]
        Hypesthesia = 2,

        [RadioReportId("hea_c_020268", InstanceName = nameof(ClinicalSymptomType.Dysesthesia))]
        Hyperesthesia = 3
    }
}