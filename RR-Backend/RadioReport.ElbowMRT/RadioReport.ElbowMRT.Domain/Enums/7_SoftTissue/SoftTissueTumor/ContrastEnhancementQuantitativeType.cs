using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum ContrastEnhancementQuantitativeType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070409", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		No = 1,

		[RadioReportId("elb_m_070410", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		Mild = 2,

		[RadioReportId("elb_m_070411", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		Strong = 3

	}
}
