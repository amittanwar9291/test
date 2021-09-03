using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums
{
	public enum CourseOfDiseaseType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_090402")]
		Progression = 1,

		[RadioReportId("mam_mx_090403")]
		NoRelevantChange = 2,

		[RadioReportId("mam_mx_090404")]
		Improvement = 3
	}
}
