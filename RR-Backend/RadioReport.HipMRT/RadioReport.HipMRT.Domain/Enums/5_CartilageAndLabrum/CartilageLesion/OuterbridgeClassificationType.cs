using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
	public enum OuterbridgeClassificationType : byte
	{
		None = 0,

		[RadioReportId("hip_m_050410")]
		GradeI = 1,

		[RadioReportId("hip_m_050411")]
		GradeII = 2,

		[RadioReportId("hip_m_050412")]
		GradeIII = 3,

		[RadioReportId("hip_m_050413")]
		GradeIV = 4

	}
}
