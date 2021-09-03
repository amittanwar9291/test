using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Summary
{
	public enum RemissionDetailsType : byte
	{
		None = 0,

		[RadioReportId("abd_m_120128")]
		Partial = 1,

		[RadioReportId("abd_m_120129")]
		Complete = 2
	}
}