using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum CalcificationType : byte
	{
		None = 0,

		[RadioReportId("tho_c_0802203")]
        Laminar = 1,

		[RadioReportId("tho_c_0802204")]
        Central = 2,

		[RadioReportId("tho_c_0802205")]
        Dystrophic = 3
    }
}
