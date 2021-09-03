using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Localization
{
    public enum ScanAreaType : byte
    {
        None = 0,

        [RadioReportId("spi_m_010106")]
        Spine = 1,

        [RadioReportId("spi_m_010105")]
        DedicatedSIJScan = 2
    }
}