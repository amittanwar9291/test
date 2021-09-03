using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal
{
    public enum MyelonSpinalCanalAreFindings
    {
        None = 0,

        [RadioReportId("spi_c_070104")]
        NormalImagingSpinalCanal = 1,

        [RadioReportId("spi_c_070105")]
        True = 2,
        
        [RadioReportId("spi_c_070109")]
        NoEvidenceSpinalTumor = 3
    }
}
