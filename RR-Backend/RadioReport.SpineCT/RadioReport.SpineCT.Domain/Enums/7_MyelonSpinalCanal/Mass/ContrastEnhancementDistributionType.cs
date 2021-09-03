using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal
{
    public enum ContrastEnhancementDistributionType
    {
        None = 0,
        
        [RadioReportId("spi_c_070229", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Peripheral = 1,
        
        [RadioReportId("spi_c_070230", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        RimEnhancement = 2,
        
        [RadioReportId("spi_c_070231", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        EntireLesion = 3,
        
        [RadioReportId("spi_c_070232", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Central = 4,
        
        [RadioReportId("spi_c_070233", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Septal = 5
    }
}
