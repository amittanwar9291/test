using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{

    public enum IndexLesionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_040241")]
        Yes = 1,

        [RadioReportId("pel_m_040242")]
        No = 2

    }
}