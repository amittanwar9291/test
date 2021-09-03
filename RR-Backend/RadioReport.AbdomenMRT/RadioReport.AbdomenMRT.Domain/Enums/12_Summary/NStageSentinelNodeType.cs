using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Summary
{
    public enum NStageSentinelNodeType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_120221")]
        pNXsn = 1,
        
        [RadioReportId("abd_m_120222")]
        pN0sn = 2,
        
        [RadioReportId("abd_m_120223")]
        pN1sn = 3
    }
}
