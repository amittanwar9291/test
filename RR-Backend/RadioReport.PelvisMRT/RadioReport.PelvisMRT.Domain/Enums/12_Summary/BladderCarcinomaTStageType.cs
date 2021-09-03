using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum BladderCarcinomaTStageType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120513")]
        LessThanT2 = 1,
        
        [RadioReportId("pel_m_120514")]
        MoreOrEqualT2 = 2,
        
        [RadioReportId("pel_m_120515")]
        MoreOrEqualT3b = 3,
        
        [RadioReportId("pel_m_120516")]
        T4 = 4,
        
        [RadioReportId("pel_m_120517")]
        Tx = 5
    }
}
