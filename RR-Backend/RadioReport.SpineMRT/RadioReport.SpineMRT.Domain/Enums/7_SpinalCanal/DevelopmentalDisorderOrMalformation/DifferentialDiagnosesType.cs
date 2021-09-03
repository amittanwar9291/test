using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum DifferentialDiagnosesType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070502", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		IntraduralLipoma = 1,

		[RadioReportId("spi_m_070508", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		FiliumTerminaleLipoma = 2,

		[RadioReportId("spi_m_070509", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		ShortFiliumTerminale = 3,

		[RadioReportId("spi_m_070510", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		VentriculusTerminalis = 4,

		[RadioReportId("spi_m_070511", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Dermalsinus = 5,

		[RadioReportId("spi_m_070513", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Diastematomyelia = 6,

		[RadioReportId("spi_m_070514", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		EnterogenicCystOrFistula = 7,

		[RadioReportId("spi_m_070520", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		CaudalAgenesia = 8,

		[RadioReportId("spi_m_070521", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		SegmentalSpinalDysgenesis = 9
	}
}
