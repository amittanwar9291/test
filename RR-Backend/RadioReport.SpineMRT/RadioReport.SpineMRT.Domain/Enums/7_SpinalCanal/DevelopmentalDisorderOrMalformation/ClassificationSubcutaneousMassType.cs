using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum ClassificationSubcutaneousMassType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070419", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		LipomasWithDuraDefect = 1,

		[RadioReportId("spi_m_070420", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Meningocele = 2,

		[RadioReportId("spi_m_070421", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		TerminalMyelocystocele = 3
    }
}
