using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Summary
{
    public enum FindingsDynamicsType : byte
    {
        None = 0,

        [RadioReportId("spi_c_100302")]
        NoChange = 1,
        
        [RadioReportId("spi_c_100303")]
        Deterioration = 2,

        [RadioReportId("spi_c_100304")]
        Improvement = 3
    }
}
