using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum BulgingType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050304", InstanceName = nameof(DiscFindingType.Degeneration))]
        Symetric = 1,

        [RadioReportId("spi_m_050305", InstanceName = nameof(DiscFindingType.Degeneration))]
        Asymetric = 2
    }
}
