using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal
{
    public enum MarginType : byte
    {
        None = 0, 
        
        [RadioReportId("spi_c_070525", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Circumscribed = 1,
        
        [RadioReportId("spi_c_070526", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        NonCircumscribed = 2,
        
        [RadioReportId("spi_c_070527", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Nodular = 3,
        
        [RadioReportId("spi_c_070528", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Multinodular = 4
    }
}
