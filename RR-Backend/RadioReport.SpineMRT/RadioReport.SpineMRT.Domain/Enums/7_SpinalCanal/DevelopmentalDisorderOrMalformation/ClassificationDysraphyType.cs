using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum ClassificationDysraphyType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070423", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		SimpleDysraphism = 1,

		[RadioReportId("spi_m_070424", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		ComplexDysraphism = 2
    }
}
