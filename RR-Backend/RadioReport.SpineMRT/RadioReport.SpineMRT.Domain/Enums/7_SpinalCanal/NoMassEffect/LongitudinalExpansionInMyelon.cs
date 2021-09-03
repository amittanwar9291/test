using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
    public enum LongitudinalExpansionInMyelon : byte
    {
        None = 0,

        [RadioReportId("spi_m_070387", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        LessOrEqual2Segments = 1,

        [RadioReportId("spi_m_070388", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        MoreThan2Segments = 2
    }
}