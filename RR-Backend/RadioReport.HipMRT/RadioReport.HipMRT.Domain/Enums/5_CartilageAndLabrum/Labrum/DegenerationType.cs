using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
	public enum DegenerationType : byte
	{
		None = 0,

		[RadioReportId("hip_m_050402")]
		Mucoid = 1,

		[RadioReportId("hip_m_050403")]
		Ossified = 2

	}
}
