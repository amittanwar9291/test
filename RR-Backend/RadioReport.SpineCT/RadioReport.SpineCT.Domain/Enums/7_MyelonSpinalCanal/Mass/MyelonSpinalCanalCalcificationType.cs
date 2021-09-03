using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal
{
	public enum MyelonSpinalCanalCalcificationType : byte
	{
		None = 0,

		[RadioReportId("spi_c_070214", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Areal = 1,

		[RadioReportId("spi_c_070215", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Central = 2,

		[RadioReportId("spi_c_070216", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
        Dystrophy = 3
	}
}
