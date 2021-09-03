using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum ContrastEnhancementDistributionType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0805316", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Peripheral = 1,

        [RadioReportId("spi_c_0805317", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        EntireLesion = 2,

        [RadioReportId("spi_c_0805318", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Central = 3,

        [RadioReportId("spi_c_0805319", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Septal = 4,

        [RadioReportId("spi_c_0805320", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Nidus = 5
    }
}
