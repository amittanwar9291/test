using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Anamnesis
{
    public enum VisualDisturbanceType : byte
    {
        None = 0,

        [RadioReportId("hea_m_020215", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        VisualFieldLoss = 1,

        [RadioReportId("hea_m_020216", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        BitemporalHemianopsia = 2,

        [RadioReportId("hea_m_020217", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        HomonymousHemianopsia = 3,

        [RadioReportId("hea_m_020218", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        CorticalBlindness = 4,

        [RadioReportId("hea_m_020219", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        Diplopia = 5,

        [RadioReportId("hea_m_020220", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        VisualAcuityLoss = 6,

        [RadioReportId("hea_m_020221", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        BlurredVision = 7
    }
}