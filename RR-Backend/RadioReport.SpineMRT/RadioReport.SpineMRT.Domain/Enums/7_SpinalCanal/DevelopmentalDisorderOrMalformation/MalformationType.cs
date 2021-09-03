using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum MalformationType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070205", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		TetheredCord = 1,

		[RadioReportId("spi_m_070206", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Syringohydromyelia = 2,

		[RadioReportId("spi_m_070207", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		ChiariMalformation = 3,

		[RadioReportId("spi_m_070208", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Dysraphy = 4
    }
}
