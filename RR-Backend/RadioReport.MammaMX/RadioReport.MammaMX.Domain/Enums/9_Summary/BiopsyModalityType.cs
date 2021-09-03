using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums
{
	public enum BiopsyModalityType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_090509")]
		Ultrasound = 1,

		[RadioReportId("mam_mx_090510")]
		Xray = 2,

		[RadioReportId("mam_mx_090513")]
		MRI = 3
	}
}
