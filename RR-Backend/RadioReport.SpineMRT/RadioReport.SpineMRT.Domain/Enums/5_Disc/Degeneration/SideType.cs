using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050306", InstanceName = nameof(DiscFindingType.Degeneration))]
        Left = 1,

        [RadioReportId("spi_m_050307", InstanceName = nameof(DiscFindingType.Degeneration))]
        Right = 2
    }
}