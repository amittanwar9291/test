using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal
{
    public enum MyelonAffectionType : byte
    {
        None = 0,
        
        [RadioReportId("spi_c_070322", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Impression = 1, 
        
        [RadioReportId("spi_c_070323", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Compression = 2
    }
}
