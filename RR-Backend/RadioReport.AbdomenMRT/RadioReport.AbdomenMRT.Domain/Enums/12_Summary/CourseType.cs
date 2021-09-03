using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Summary
{
	public enum CourseType : byte
	{
		None = 0,

		[RadioReportId("abd_m_120105")]
		Progression = 1,

		[RadioReportId("abd_m_120106")]
		Stable = 2,

		[RadioReportId("abd_m_120107")]
		RemissonReponse = 3
	}
}