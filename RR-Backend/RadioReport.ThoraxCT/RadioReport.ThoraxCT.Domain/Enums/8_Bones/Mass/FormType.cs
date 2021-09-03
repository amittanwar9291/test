using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080431")]
		Round = 1,

		[RadioReportId("tho_c_080432")]
		Oval = 2,

		[RadioReportId("tho_c_080433")]
		Irregular = 3
    }
}
