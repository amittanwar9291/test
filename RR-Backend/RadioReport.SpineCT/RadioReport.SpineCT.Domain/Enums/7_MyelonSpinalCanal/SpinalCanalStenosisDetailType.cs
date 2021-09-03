using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal
{
	public enum SpinalCanalStenosisDetailType : byte
	{
		None = 0,

		[RadioReportId("spi_c_070302")]
		RelativeSpinalkanalstenoseLS = 1,

		[RadioReportId("spi_c_070303")]
		AbsoluteSpinalCanastenosislumbar = 2,

		[RadioReportId("spi_c_070304")]
		SevereSpinalCanalStenosis = 3
	}
}
