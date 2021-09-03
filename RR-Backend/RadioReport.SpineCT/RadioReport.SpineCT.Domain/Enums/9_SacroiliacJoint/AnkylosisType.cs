using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SacroiliacJoint
{
	public enum AnkylosisType : byte
	{
		None = 0,

		[RadioReportId("spi_c_090308")]
		Total = 1,

		[RadioReportId("spi_c_090309")]
		Partial = 2,

		[RadioReportId("spi_c_090310")]
		Periarticular = 3

	}
}
