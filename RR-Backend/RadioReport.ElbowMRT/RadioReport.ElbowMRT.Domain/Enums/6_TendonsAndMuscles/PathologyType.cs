using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("elb_m_060209")]
        Rupture = 1,

        [RadioReportId("elb_m_060210")]
        Enthesiopathy = 2,

        [RadioReportId("elb_m_060207")]
        Subluxation = 3
    }
}
