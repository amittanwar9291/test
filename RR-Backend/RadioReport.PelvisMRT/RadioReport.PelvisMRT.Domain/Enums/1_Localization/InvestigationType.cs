using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums
{
	public enum InvestigationType : byte
	{
		None = 0,

		[RadioReportId("pel_m_010203")]
		MRIProstate = 1,

		[RadioReportId("pel_m_010205")]
		PelvisWholeSoftPart = 2,

		[RadioReportId("pel_m_010206")]
		MRIRectum = 3,

		[RadioReportId("pel_m_010207")]
		MRIPelvicFloor = 4,

		[RadioReportId("pel_m_010209")]
		MRIPenisTesticle = 5

	}
}
