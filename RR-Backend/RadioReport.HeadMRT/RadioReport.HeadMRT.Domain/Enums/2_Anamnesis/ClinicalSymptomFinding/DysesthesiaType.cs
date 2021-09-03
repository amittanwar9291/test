using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Anamnesis
{
    public enum DysesthesiaType : byte
    {
        None = 0,

        [RadioReportId("hea_m_020266", InstanceName = nameof(ClinicalSymptomType.Dysesthesia))]
        Paresthesia = 1,

        [RadioReportId("hea_m_020267", InstanceName = nameof(ClinicalSymptomType.Dysesthesia))]
        Hypesthesia = 2,

        [RadioReportId("hea_m_020268", InstanceName = nameof(ClinicalSymptomType.Dysesthesia))]
        Hyperesthesia = 3
    }
}