using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum DetailsClosedDysraphismType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070416", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		WithSubcutaneousMass = 1,

		[RadioReportId("spi_m_070417", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		WithoutSubcutaneousMass = 2
    }
}
