using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum RectalCancerNStageType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120528")]
        N0 = 1,
        
        [RadioReportId("pel_m_120529")]
        N1 = 2,
        
        [RadioReportId("pel_m_120530")]
        N2 = 3,
        
        [RadioReportId("pel_m_120531")]
        NPlus = 4,
        
        [RadioReportId("pel_m_120532")]
        Nx = 5
    }
}
