using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum ScaphoidSclerosisType : byte
	{
		None = 0,

		[RadioReportId("han_m_0403128", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		WithOsteophytesHypertrophic = 1,

		[RadioReportId("han_m_0403129", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		WithoutOsteophytesAtrophic = 2,

	}
}
