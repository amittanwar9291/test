using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Configuration
{
    public enum LumbosacralType : byte
    {
        None = 0,

        [RadioReportId("spi_c_040219", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        LumbalizedS1 = 1,

        [RadioReportId("spi_c_040220", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        SacralizedL5 = 2
    }
}