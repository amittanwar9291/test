using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum SigmaSpaceRequirementKmEnhancementType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080346", InstanceName = nameof(RectumFindingType.SigmaMass))]
		Powerful = 1,

		[RadioReportId("pel_m_080347", InstanceName = nameof(RectumFindingType.SigmaMass))]
		Low = 2,

		[RadioReportId("pel_m_080348", InstanceName = nameof(RectumFindingType.SigmaMass))]
		No = 3

	}
}
