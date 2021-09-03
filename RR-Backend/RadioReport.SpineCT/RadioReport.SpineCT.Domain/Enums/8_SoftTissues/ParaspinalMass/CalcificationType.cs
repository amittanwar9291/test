using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum CalcificationType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0802308", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Areal = 1,

        [RadioReportId("spi_c_0802309", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Central = 2,

        [RadioReportId("spi_c_0802310", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Dystrophy = 3
    }
}
