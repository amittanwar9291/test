using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
	public enum DirectionOfMigrationType : byte
	{
		None = 0,

		[RadioReportId("spi_c_0502202", InstanceName = nameof(DiscFindingType.Migration))]
        Cranial = 1,

		[RadioReportId("spi_c_0502203", InstanceName = nameof(DiscFindingType.Migration))]
        Caudal = 2
	}
}
