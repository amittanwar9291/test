using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum PeriostealReactionType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080445")]
		Missing = 1,

		[RadioReportId("tho_c_080446")]
		Continuously = 2,

		[RadioReportId("tho_c_080450")]
		Interrupted = 3
    }
}
