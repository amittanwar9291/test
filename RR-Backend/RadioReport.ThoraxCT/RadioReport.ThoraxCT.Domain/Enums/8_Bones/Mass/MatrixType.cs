using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum MatrixType : byte
	{
		None = 0,

		[RadioReportId("tho_c_0805221")]
        Osseous = 1,

		[RadioReportId("tho_c_0805222")]
        Chondroid = 2
    }
}
