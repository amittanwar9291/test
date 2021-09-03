using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal
{
    public enum ContrastEnhancementQuantitativeType : byte 
    {
        None = 0,
        
        [RadioReportId("spi_c_070223", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        No = 1,
        
        [RadioReportId("spi_c_070224", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Weak = 2,
        
        [RadioReportId("spi_c_070225", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Significant = 3
    }
}
