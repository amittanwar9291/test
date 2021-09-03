using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Anamnesis
{
    public enum ComplaintsType : byte
    {
        None = 0,

        [RadioReportId("spi_m_020303")]
        Lumbago = 1,

        [RadioReportId("spi_m_020304")]
        Neurology = 2
    }
}
