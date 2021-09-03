using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Anamnesis
{
    public enum MotorDeficitType : byte
    {
        None = 0,

        [RadioReportId("hea_m_020244", InstanceName = nameof(ClinicalSymptomType.MotorDeficit))]
        Apraxia = 1,

        [RadioReportId("hea_m_020245", InstanceName = nameof(ClinicalSymptomType.MotorDeficit))]
        Hemiparesis = 2,

        [RadioReportId("hea_m_020246", InstanceName = nameof(ClinicalSymptomType.MotorDeficit))]
        Hemiplegia = 3
    }
}