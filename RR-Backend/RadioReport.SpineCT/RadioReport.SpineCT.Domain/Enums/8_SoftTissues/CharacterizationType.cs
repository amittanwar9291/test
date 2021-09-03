using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum CharacterizationType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0804301", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Solid = 1,

        [RadioReportId("spi_c_0804302", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Liquid = 2,

        [RadioReportId("spi_c_0804318", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        BorderlineEnlargedLN = 3,

        [RadioReportId("spi_c_0804319", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        Lymphadenopathy = 4
    }
}
