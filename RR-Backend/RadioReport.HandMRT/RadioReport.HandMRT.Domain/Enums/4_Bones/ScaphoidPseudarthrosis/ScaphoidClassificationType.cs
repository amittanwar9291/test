using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum ScaphoidClassificationType : byte
	{
		None = 0,

		[RadioReportId("han_m_0403125", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		StageIResorptionZone = 1,

		[RadioReportId("han_m_0403126", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		StageIICystFormation = 2,

		[RadioReportId("han_m_0403127", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		StageIIISclerosis= 3,

		[RadioReportId("han_m_0403130", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
		StageIVSecondaryOsteoarthritis = 4

	}
}
