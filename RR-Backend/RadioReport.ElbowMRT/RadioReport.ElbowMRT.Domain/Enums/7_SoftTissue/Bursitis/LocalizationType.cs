using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum LocalizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070214", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
		OlecranonBursa = 1,

		[RadioReportId("elb_m_070215", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
		BursaEpicondylarisLateralis = 2,

		[RadioReportId("elb_m_070216", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
		BursaEpicondylarisMedialis = 3,

		[RadioReportId("elb_m_070217", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
		BicipitoradialBursa = 4

	}
}
