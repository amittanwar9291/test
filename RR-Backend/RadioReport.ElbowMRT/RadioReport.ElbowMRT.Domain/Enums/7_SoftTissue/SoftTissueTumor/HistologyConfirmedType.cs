using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.SoftTissue
{
	public enum HistologyConfirmedType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0702207", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		Benign = 1,

		[RadioReportId("elb_m_0702208", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		Malignant = 2
	}
}
