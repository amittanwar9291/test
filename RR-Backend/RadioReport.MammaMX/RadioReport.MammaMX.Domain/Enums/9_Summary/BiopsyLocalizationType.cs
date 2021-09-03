using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums
{
	public enum BiopsyLocalizationType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_090504")]
		RightBreast = 1,

		[RadioReportId("mam_mx_090505")]
		LeftBreast = 2,

		[RadioReportId("mam_mx_090506")]
		LymphNodeRight = 3,

		[RadioReportId("mam_mx_090507")]
		LymphNodeLeft = 4
	}
}
