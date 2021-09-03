using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum LocalizationType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070408", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Lateral = 1,

		[RadioReportId("spi_m_070409", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Intrasacral = 2,

		[RadioReportId("spi_m_070410", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Anterior = 3,

		[RadioReportId("spi_m_070411", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Posterior = 4
    }
}
