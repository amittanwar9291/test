using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Anamnesis
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("hea_m_020248", InstanceName = nameof(ClinicalSymptomType.MotorDeficit))]
        Right = 1,

        [RadioReportId("hea_m_020249", InstanceName = nameof(ClinicalSymptomType.MotorDeficit))]
        Left = 2
    }
}