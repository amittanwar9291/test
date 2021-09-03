using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum DensityType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0805301", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Fat = 1,

        [RadioReportId("spi_c_0805302", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Water = 2,

        [RadioReportId("spi_c_0805303", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Blood = 3,

        [RadioReportId("spi_c_0805304", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        SoftTissueIsodense = 4
    }
}
