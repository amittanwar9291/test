using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum FindingDetailType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050309", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050309", InstanceName = nameof(DiscFindingType.Extrusion))]
        Localization = 1,

        [RadioReportId("spi_m_050310", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050310", InstanceName = nameof(DiscFindingType.Extrusion))]
        BroadBase = 2
    }
}
