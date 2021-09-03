using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Configuration
{
    public enum MeyerdingClassificationType : byte
    {
        None = 0,

        [RadioReportId("spi_m_040312", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Grade1 = 1,

        [RadioReportId("spi_m_040313", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Grade2 = 2,

        [RadioReportId("spi_m_040314", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Grade3 = 3,

        [RadioReportId("spi_m_040315", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Grade4 = 4,

        [RadioReportId("spi_m_040316", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Grade5 = 5
    }
}
