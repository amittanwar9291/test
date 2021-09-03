using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum ShapeType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_060408")]
        Round = 1,
        
        [RadioReportId("hip_m_060409")]
        Lobulated = 2,
        
        [RadioReportId("hip_m_060410")]
        Multilobulated = 3
    }
}
