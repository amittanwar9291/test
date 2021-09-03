using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum CharacterizationOpenType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070405", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Myelomeningocele = 1,

		[RadioReportId("spi_m_070406", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
		Meningocele = 2
	}
}
