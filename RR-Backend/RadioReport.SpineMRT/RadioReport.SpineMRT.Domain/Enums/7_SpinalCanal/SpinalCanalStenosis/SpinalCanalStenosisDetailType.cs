using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum SpinalCanalStenosisDetailType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070302", InstanceName = nameof(SpinalCanalFindingType.SpinalCanalStenosis))]
		Relative = 1,

		[RadioReportId("spi_m_070303", InstanceName = nameof(SpinalCanalFindingType.SpinalCanalStenosis))]
		Absolutely = 2,

		[RadioReportId("spi_m_070304", InstanceName = nameof(SpinalCanalFindingType.SpinalCanalStenosis))]
		HighGrade = 3
	}
}
