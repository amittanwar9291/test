using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum QuantityTransverseType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070384", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
		LessThan50PercentOfTheCrossSection = 1,

		[RadioReportId("spi_m_070385", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
		MoreThan50PercentOfTheCrossSection = 2
    }
}
