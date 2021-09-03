using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum CorticalBoneType : byte
	{
		None = 0,

		[RadioReportId("tho_c_0804217")]
        Intact = 1,

		[RadioReportId("tho_c_0804218")]
		Destruction = 2,

		[RadioReportId("tho_c_0804219")]
		ThinningScalopping = 3,

		[RadioReportId("tho_c_0804220")]
        Permeation = 4,

        [RadioReportId("tho_c_0804221")]
		Thickening = 5
	}
}
