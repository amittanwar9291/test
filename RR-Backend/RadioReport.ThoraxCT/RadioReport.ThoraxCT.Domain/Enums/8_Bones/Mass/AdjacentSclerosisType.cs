using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum AdjacentSclerosisType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080523")]
		Narrow = 1,

		[RadioReportId("tho_c_080524")]
		Broad = 2
    }
}
