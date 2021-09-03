using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.TendonsAndMuscles
{ 
    public enum HematomaCharacterizationType : byte
    {
        None = 0,

        [RadioReportId("elb_m_060349")]
        Hyperacute = 1,

        [RadioReportId("elb_m_060350")]
        Acute = 2,

        [RadioReportId("elb_m_060351")]
        Subacute = 3,

        [RadioReportId("elb_m_060352")]
        ChronicOrganized = 4
    }
}
