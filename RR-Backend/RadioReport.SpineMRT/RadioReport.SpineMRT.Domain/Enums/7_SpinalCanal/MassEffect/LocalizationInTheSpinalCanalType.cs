using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum LocalizationInTheSpinalCanalType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070369", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
		Anterior = 1,

		[RadioReportId("spi_m_070370", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
		Posterior = 2,

		[RadioReportId("spi_m_070371", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
		Left = 3,

		[RadioReportId("spi_m_070372", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
		Right = 4
    }
}
