using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum LocalizationRelatedJointSpaceLevelType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070247", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		[RadioReportId("elb_m_070247", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
		[RadioReportId("elb_m_070247", InstanceName = nameof(SoftTissueFindingType.Abcess))]
		Proximal = 1,

		[RadioReportId("elb_m_070248", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		[RadioReportId("elb_m_070248", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
		[RadioReportId("elb_m_070248", InstanceName = nameof(SoftTissueFindingType.Abcess))]
		Distal = 2

	}
}
