using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum AberrantCourseType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070241", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
		Kinking = 1,

		[RadioReportId("spi_m_070242", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
		Bending = 2
	}
}
