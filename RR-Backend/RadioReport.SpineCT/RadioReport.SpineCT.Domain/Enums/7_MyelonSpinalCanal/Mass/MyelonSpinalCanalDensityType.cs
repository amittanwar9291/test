using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal
{
    public enum MyelonSpinalCanalDensityType : byte
    {
        None = 0, 
        
        [RadioReportId("spi_c_070516", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Fat = 1,
        
        [RadioReportId("spi_c_070517", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Water = 2,
        
        [RadioReportId("spi_c_070518", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Increased = 3,
        
        [RadioReportId("spi_c_070519", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        SoftTissue = 4
    }
}
