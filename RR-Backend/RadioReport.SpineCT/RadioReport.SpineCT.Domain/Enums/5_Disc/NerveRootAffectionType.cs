using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
	public enum NerveRootAffectionType : byte
	{
		None = 0,

		[RadioReportId("spi_c_0504208", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_050510", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050510", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_050510", InstanceName = nameof(DiscFindingType.Migration))]
        Contact = 1,

		[RadioReportId("spi_c_0504209", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_050511", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050511", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_050511", InstanceName = nameof(DiscFindingType.Migration))]
        Displacement = 2,

		[RadioReportId("spi_c_0504210", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_050512", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050512", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_050512", InstanceName = nameof(DiscFindingType.Migration))]
        Compression = 3
	}
}
