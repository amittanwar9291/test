using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum EndoprosthesisLocation: byte
    {
        None = 0,

        [RadioReportId("hip_m_020204")]
        Right = 1,

        [RadioReportId("hip_m_020205")]
        Left = 2
    }
}
