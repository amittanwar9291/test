using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum AreFindingsType : byte
    {
        None = 0,

        [RadioReportId("spi_m_090104")]
        Incospicuous = 1,

        [RadioReportId("spi_m_090105")]
        NonSpecified = 2,

        [RadioReportId("spi_m_090106")]
        PathologicFinding = 3
    }
}
