using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum LocalizationType : byte
    {
        None = 0,

        [RadioReportId("hea_c_020251", InstanceName = nameof(ClinicalSymptomType.MotorDeficit))]
        Brachiofacial = 1,

        [RadioReportId("hea_c_020252", InstanceName = nameof(ClinicalSymptomType.MotorDeficit))]
        LowerLimb = 2
    }
}