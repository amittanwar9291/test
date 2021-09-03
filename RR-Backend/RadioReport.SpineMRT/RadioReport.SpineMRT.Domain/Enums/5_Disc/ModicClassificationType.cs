using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum ModicClassificationType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050314", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050314", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050314", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050314", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050314", InstanceName = nameof(DiscFindingType.ErosiveIntervertebralOsteochondrosis))]
        Type1 = 1,

        [RadioReportId("spi_m_050315", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050315", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050315", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050315", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050315", InstanceName = nameof(DiscFindingType.ErosiveIntervertebralOsteochondrosis))]
        Type2 = 2,

        [RadioReportId("spi_m_050316", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050316", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050316", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050316", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050316", InstanceName = nameof(DiscFindingType.ErosiveIntervertebralOsteochondrosis))]
        Type3 = 3
    }
}
