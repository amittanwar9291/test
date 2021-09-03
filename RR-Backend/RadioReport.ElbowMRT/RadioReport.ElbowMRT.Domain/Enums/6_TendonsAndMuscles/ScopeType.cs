using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum ScopeType : byte
	{
		None = 0,

		[RadioReportId("elb_m_060324")]
		PartiaTear = 1,

		[RadioReportId("elb_m_060326")]
		CompleteTear = 2
	}
}
