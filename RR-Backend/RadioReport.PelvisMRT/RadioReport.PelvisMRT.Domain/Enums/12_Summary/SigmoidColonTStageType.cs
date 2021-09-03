using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum SigmoidColonTStageType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120533")]
        T1 = 1,
        
        [RadioReportId("pel_m_120534")]
        T2 = 2,
        
        [RadioReportId("pel_m_120535")]
        T3 = 3,
        
        [RadioReportId("pel_m_120536")]
        T4a = 4,
        
        [RadioReportId("pel_m_120537")]
        T4b = 5,
        
        [RadioReportId("pel_m_120538")]
        Tx = 6
    }
}
