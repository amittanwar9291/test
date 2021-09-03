using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0804310", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Round = 1,

        [RadioReportId("spi_c_0804311", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Oval = 2,

        [RadioReportId("spi_c_0804312", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Irregular = 3
    }
}
