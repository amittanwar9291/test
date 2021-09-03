using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum RectalCancerTStageType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120522")]
        LessThanT2 = 1,
        
        [RadioReportId("pel_m_120523")]
        MoreOrEqualT2 = 2,
        
        [RadioReportId("pel_m_120524")]
        T3 = 3,
        
        [RadioReportId("pel_m_120525")]
        T4a = 4,
        
        [RadioReportId("pel_m_120526")]
        T4b = 5,
        
        [RadioReportId("pel_m_120527")]
        Tx = 6
    }
}
