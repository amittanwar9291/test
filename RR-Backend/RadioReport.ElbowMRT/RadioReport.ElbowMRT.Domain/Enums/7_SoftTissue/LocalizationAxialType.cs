
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum LocalizationAxialType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070242", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		[RadioReportId("elb_m_070242", InstanceName = nameof(SoftTissueFindingType.Abcess))]
		Anterior = 1,

		[RadioReportId("elb_m_070243", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		[RadioReportId("elb_m_070243", InstanceName = nameof(SoftTissueFindingType.Abcess))]
		Posterior = 2,

		[RadioReportId("elb_m_070244", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		[RadioReportId("elb_m_070244", InstanceName = nameof(SoftTissueFindingType.Abcess))]
		Medial = 3,

		[RadioReportId("elb_m_070245", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		[RadioReportId("elb_m_070245", InstanceName = nameof(SoftTissueFindingType.Abcess))]
		Lateral = 4

	}
}
