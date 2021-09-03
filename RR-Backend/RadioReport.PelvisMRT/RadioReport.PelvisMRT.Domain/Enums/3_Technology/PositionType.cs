using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Technology
{
     public enum PositionType : byte
     {
        None = 0,

        [RadioReportId("pel_m_030105")]
        Back = 1,

        [RadioReportId("pel_m_030106")]
        Stomach = 2
     }
}
