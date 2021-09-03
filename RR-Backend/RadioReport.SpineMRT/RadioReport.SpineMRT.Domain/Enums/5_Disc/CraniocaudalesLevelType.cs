using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum CraniocaudalesLevelType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050321", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050321", InstanceName = nameof(DiscFindingType.Sequestration))]
        Suprapedicular = 1,

        [RadioReportId("spi_m_050322", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050322", InstanceName = nameof(DiscFindingType.Sequestration))]
        Pedicular = 2,

        [RadioReportId("spi_m_050323", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050323", InstanceName = nameof(DiscFindingType.Sequestration))]
        Infrapedicular = 3,

        [RadioReportId("spi_m_050324", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050324", InstanceName = nameof(DiscFindingType.Sequestration))]
        Intervertebral = 4
    }
}
