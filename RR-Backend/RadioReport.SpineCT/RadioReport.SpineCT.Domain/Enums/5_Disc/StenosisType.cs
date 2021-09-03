using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
	public enum StenosisType : byte
	{
		None = 0,

		[RadioReportId("spi_c_0505202", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_0505203", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_0505203", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_0505203", InstanceName = nameof(DiscFindingType.Migration))]
        Foramen = 1,

		[RadioReportId("spi_c_0505254", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_0505204", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_0505204", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_0505204", InstanceName = nameof(DiscFindingType.Migration))]
        Recess = 2
	}
}
