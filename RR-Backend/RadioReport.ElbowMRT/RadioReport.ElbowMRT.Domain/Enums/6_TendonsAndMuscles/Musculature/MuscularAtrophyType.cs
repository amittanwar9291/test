using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
    public enum MuscularAtrophyType : byte
    {
        None = 0,

        [RadioReportId("elb_m_060513")]
        Moderate = 1,

        [RadioReportId("elb_m_060514")]
        Advanced = 2

    }
}
