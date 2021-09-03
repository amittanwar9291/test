using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Summary
{
    public enum LiRADSTreatmentResponseCategoryType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_120420")]
        LRTRNotAssessable = 1,
        
        [RadioReportId("abd_m_120421")]
        LRTRAvital = 2,
        
        [RadioReportId("abd_m_120422")]
        LRTREquivocal = 3,
        
        [RadioReportId("abd_m_120423")]
        LRTRVital = 4
    }
}
