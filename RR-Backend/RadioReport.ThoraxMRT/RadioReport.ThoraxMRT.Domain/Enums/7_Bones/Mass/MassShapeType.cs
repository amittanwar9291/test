using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{ 
   
    public enum MassShapeType : byte
    {
        None = 0,

        [RadioReportId("tho_m_070531")]
        Round = 1,

        [RadioReportId("tho_m_070532")]
        Lobulated = 2,

        [RadioReportId("tho_m_070533")]
        Geographic = 3,

        [RadioReportId("tho_m_070534")]
        BroadBased = 4,

        [RadioReportId("tho_m_070535")]
        Pedunculated = 5
    }
}
