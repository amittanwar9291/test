using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum ScaphoidCystType : byte
	{
		None = 0,

		[RadioReportId("han_m_0403246", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		Stable = 1,

		[RadioReportId("han_m_0403247", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		Unstable = 2,
	}
}
