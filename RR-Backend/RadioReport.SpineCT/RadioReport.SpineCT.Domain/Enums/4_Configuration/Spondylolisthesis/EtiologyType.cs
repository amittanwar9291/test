using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Configuration
{
    public enum EtiologyType : byte
    {
        None = 0,

        [RadioReportId("spi_c_040318", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        SpondylolisthesisVera = 1,

        [RadioReportId("spi_c_040319", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        Degenerative = 2

    }
}
