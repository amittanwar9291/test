using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Summary
{
	public enum DynamicsOfFindingsType : byte
	{
		None = 0,

		[RadioReportId("nec_m_110310")]
		Deterioration = 1,

		[RadioReportId("nec_m_110311")]
		NoChange = 2,

		[RadioReportId("nec_m_110312")]
		Improvement = 3
	}
}