using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal
{
    public enum HomogeneityType : byte
    {
        None = 0,
        
        [RadioReportId("spi_c_070210", InstanceName = nameof(MyelonSpinalCanalFinding.CharIIHomogeneityType))]
        [RadioReportId("spi_c_070226", InstanceName = nameof(MyelonSpinalCanalFinding.DDHomogeneityType))]
        Homogeneous = 1, 
        
        [RadioReportId("spi_c_070211", InstanceName = nameof(MyelonSpinalCanalFinding.CharIIHomogeneityType))]
        [RadioReportId("spi_c_070227", InstanceName = nameof(MyelonSpinalCanalFinding.DDHomogeneityType))]
        Heterogeneous = 2
    }
}
