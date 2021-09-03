using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
    public enum AgeType : byte
    {
        None = 0,

        [RadioReportId("elb_m_060510")]
        Hyperacute = 1,

        [RadioReportId("elb_m_060511")]
        Acute = 2,

        [RadioReportId("elb_m_060512")]
        Subacute = 3,

        [RadioReportId("elb_m_060513")]
        ChronicOrganized = 4

    }
}
