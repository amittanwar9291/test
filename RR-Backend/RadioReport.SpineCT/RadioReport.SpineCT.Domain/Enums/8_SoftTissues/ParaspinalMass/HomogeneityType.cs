using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0804307", InstanceName = nameof(SoftTissuesFinding.HomogeneityType))]
        [RadioReportId("spi_c_0805313", InstanceName = nameof(SoftTissuesFinding.ContrastEnhancementHomogeneityType))]
        Homogeneous = 1,

        [RadioReportId("spi_c_0804308", InstanceName = nameof(SoftTissuesFinding.HomogeneityType))]
        [RadioReportId("spi_c_0805314", InstanceName = nameof(SoftTissuesFinding.ContrastEnhancementHomogeneityType))]
        Heterogeneous = 2
    }
}
