using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Anamnesis
{
    public enum SpeechDisorderType : byte
    {
        None = 0,

        [RadioReportId("hea_m_020277", InstanceName = nameof(ClinicalSymptomType.SpeechDisorder))]
        Dysarthria = 1,

        [RadioReportId("hea_m_020278", InstanceName = nameof(ClinicalSymptomType.SpeechDisorder))]
        Aphasia = 2
    }
}