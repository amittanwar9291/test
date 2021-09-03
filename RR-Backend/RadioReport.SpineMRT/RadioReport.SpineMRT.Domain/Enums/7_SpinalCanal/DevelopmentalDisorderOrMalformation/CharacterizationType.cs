using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum CharacterizationType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070314", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		ChiariI = 1,

		[RadioReportId("spi_m_070315", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		ChiariII = 2,

		[RadioReportId("spi_m_070325", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Open = 3,

		[RadioReportId("spi_m_070326", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Closed = 4
	}
}
