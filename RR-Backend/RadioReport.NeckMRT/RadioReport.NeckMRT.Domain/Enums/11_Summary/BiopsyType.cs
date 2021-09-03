using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Summary
{
	public enum BiopsyType : byte
	{
		None = 0,

		[RadioReportId("nec_m_110305")]
		CtGuided = 1,

		[RadioReportId("nec_m_110306")]
		Endoscopic = 2,

		[RadioReportId("nec_m_110307")]
		SonographyGuided = 3
	}
}