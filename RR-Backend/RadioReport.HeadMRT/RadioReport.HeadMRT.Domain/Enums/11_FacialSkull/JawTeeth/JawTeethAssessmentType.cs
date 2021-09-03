using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum JawTeethAssessmentType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1105216", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Acute = 1,

        [RadioReportId("hea_m_1105217", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Chronic = 2
    }
}