using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SacroiliacJoint
{
	public enum SubchondralSclerosisType : byte
	{
		None = 0,

		[RadioReportId("spi_c_090404")]
		CloseToTheJoint = 1,

		[RadioReportId("spi_c_090405")]
		GreaterThan5MmDistance = 2

	}
}
