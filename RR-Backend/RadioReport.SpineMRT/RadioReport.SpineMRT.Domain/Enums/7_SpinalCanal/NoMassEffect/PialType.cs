using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum PialType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070470", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
		NonNodular = 1,

		[RadioReportId("spi_m_070471", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
		Nodular = 2
    }
}
