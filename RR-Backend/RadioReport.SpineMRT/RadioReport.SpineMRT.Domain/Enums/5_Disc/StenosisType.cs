using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum StenosisType : byte
    {
        None = 0,

        [RadioReportId("spi_m_0505203", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_0505203", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_0505203", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_0505203", InstanceName = nameof(DiscFindingType.Sequestration))]
        Foramen = 1,

        [RadioReportId("spi_m_0505204", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_0505204", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_0505204", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_0505204", InstanceName = nameof(DiscFindingType.Sequestration))]
        Recess = 2
    }
}