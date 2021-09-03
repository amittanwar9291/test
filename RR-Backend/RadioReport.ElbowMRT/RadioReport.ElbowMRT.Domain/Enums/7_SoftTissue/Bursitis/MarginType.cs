using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070221", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
		WellCircumscribed = 1,

		[RadioReportId("elb_m_070222", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
		IlldefinedMargin = 2

	}
}
