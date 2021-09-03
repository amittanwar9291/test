using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum NerveRootAffectionType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050510", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050510", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050510", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050510", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050510", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        Contact = 1,

        [RadioReportId("spi_m_050511", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050511", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050511", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050511", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050511", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        Displacement = 2,

        [RadioReportId("spi_m_050512", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050512", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050512", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050512", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050512", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        Compression = 3
    }
}
