using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal
{
    public enum CharacterizationType : byte
    {
        None = 0,

        [RadioReportId("spi_c_070426", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Solid = 1,

        [RadioReportId("spi_c_070427", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Liquid = 2
    }
}
