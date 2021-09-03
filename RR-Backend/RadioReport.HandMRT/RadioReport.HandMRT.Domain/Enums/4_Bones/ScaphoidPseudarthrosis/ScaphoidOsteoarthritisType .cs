using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum ScaphoidOsteoarthritisType : byte
	{
		None = 0,

		[RadioReportId("han_m_0403131", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		BetweenRadiusAndDistal = 1,

		[RadioReportId("han_m_0403132", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		BetweenProximalAndCapitatum = 2,

		[RadioReportId("han_m_0403133", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		BetweenLunatumAndCapitatum = 3

	}
}
