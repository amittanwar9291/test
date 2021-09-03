using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Configuration
{
    public enum DetailsType : byte
    {
        None = 0,

        [RadioReportId("spi_c_040309", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Ventrolisthesis = 1,

        [RadioReportId("spi_c_040310", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Retrolisthesis = 2
    }
}
