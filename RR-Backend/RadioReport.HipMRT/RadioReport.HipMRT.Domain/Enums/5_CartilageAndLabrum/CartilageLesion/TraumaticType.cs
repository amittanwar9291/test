using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
	public enum TraumaticType : byte
	{
		None = 0,

		[RadioReportId("hip_m_050427")]
		Contusion = 1,

		[RadioReportId("hip_m_050428")]
		Delamination = 2,

		[RadioReportId("hip_m_050429")]
		CartilageFlap = 3,

		[RadioReportId("hip_m_050430")]
		CartilageFlake = 4,

		[RadioReportId("hip_m_050431")]
		Fissure = 5

	}
}
