using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum SigmoidColonNStageType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120539")]
        N0 = 1,
        
        [RadioReportId("pel_m_120540")]
        N1a = 2,
        
        [RadioReportId("pel_m_120541")]
        N1b = 3,
        
        [RadioReportId("pel_m_120542")]
        N2a = 4,
        
        [RadioReportId("pel_m_120543")]
        N2b = 5,
        
        [RadioReportId("pel_m_120544")]
        Nx = 6

    }
}
