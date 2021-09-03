using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Configuration
{
	public enum DefinitionType : byte
	{
		None = 0,

        [RadioReportId("spi_c_0402214", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        RightType2 = 1,

        [RadioReportId("spi_c_0402215", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        RightType3 = 2

	}
}
