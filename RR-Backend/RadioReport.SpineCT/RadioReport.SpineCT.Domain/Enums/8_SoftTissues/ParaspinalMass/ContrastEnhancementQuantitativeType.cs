using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum ContrastEnhancementQuantitativeType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0805310", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        No = 1,

        [RadioReportId("spi_c_0805311", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Weak = 2,

        [RadioReportId("spi_c_0805312", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Significant = 3
    }
}
