using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum ProstateCarcinomaTStageType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120502")]
        T2 = 1,
        
        [RadioReportId("pel_m_120503")]
        T3 = 2,
        
        [RadioReportId("pel_m_120504")]
        T4 = 3,
        
        [RadioReportId("pel_m_120505")]
        Tx = 4
    }
}
