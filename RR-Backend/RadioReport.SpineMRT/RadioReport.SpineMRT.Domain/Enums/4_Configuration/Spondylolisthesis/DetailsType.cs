using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Configuration
{
    public enum DetailsType : byte
    {
        None = 0,

        [RadioReportId("spi_m_040309", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Ventrolisthesis = 1,

        [RadioReportId("spi_m_040310", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Retrolisthesis = 2
    }
}
