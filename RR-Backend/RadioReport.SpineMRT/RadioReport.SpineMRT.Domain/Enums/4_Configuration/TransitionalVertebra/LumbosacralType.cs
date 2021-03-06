using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Configuration
{
    public enum LumbosacralType : byte
    {
        None = 0,

        [RadioReportId("spi_m_040219", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        LumbalizedS1 = 1,

        [RadioReportId("spi_m_040220", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        SacralizedL5 = 2
    }
}