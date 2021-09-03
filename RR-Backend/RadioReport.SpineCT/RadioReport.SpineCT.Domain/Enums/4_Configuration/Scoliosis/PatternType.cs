using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Configuration
{
	public enum PatternType : byte
	{
        None = 0,
        
        [RadioReportId("spi_c_0402204", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        CShaped = 1,

        [RadioReportId("spi_c_0402205", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        SShaped = 2,

        [RadioReportId("spi_c_0402208", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        TripleScoliosis = 3

    }
}
