using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Configuration
{
    public enum EtiologyType : byte
    {
        None = 0,

        [RadioReportId("spi_m_040318", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        SpondylolisthesisVera = 1,

        [RadioReportId("spi_m_040319", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Degenerative = 2
    }
}
