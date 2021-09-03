using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum LocalizationInTheSpinalCordType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070335", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
		Eccentric = 1,

		[RadioReportId("spi_m_070336", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
		Central = 2,

		[RadioReportId("spi_m_070337", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
		Dorsal = 3,

		[RadioReportId("spi_m_070380", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
		Anterior = 4,

		[RadioReportId("spi_m_070381", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
		Posterior = 5,

		[RadioReportId("spi_m_070382", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
		Lateral = 6
	}
}
