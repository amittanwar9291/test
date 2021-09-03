using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Configuration
{
    public enum SacralizedL5Type : byte
    {
        None = 0,

        [RadioReportId("spi_m_040221", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        Complete = 1,

        [RadioReportId("spi_m_040222", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        Incomplete = 2,

        [RadioReportId("spi_m_040223", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        Mixed = 3,

        [RadioReportId("spi_m_040224", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        Incipient = 4
    }
}
