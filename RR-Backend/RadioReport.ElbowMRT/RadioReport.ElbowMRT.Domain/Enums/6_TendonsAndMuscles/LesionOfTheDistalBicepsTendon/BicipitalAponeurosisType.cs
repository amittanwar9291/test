using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum BicipitalAponeurosisType : byte
	{
		None = 0,

		[RadioReportId("elb_m_060333")]
		Intact = 1,

		[RadioReportId("elb_m_060334")]
		Tear = 2

	}
}
