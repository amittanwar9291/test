using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Summary
{
    public enum TStageSubType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_120115")]
        c = 1,
        
        [RadioReportId("abd_m_120116")]
        p = 2
    }
}
