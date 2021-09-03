using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Summary
{
	public enum ComparisonToPriorExamsType : byte
	{
		None = 0,

		[RadioReportId("elb_m_080106")]
        Improvement = 1,

		[RadioReportId("elb_m_080105")]
		NoChange = 2,

		[RadioReportId("elb_m_080104")]
        Deterioration = 3
	}
}
