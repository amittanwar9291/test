using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum BladderCarcinomaNStageType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120518")]
        N0 = 1,
        
        [RadioReportId("pel_m_120519")]
        N1 = 2,
        
        [RadioReportId("pel_m_120520")]
        N2 = 3,
        
        [RadioReportId("pel_m_120521")]
        Nx = 4
    }
}
