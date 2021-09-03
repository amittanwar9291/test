using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum FollowUpTimeType : byte
    {
        None = 0,
        
        [RadioReportId("kne_m_090109")]
        In3Months = 1,

        [RadioReportId("kne_m_090110")]
        In3To6Months = 2,

        [RadioReportId("kne_m_090111")]
        In6To12Months = 3,

        [RadioReportId("kne_m_090112")]
        In12Months = 4,

        [RadioReportId("kne_m_090113")]
        In18To24Months = 5
    }
}
