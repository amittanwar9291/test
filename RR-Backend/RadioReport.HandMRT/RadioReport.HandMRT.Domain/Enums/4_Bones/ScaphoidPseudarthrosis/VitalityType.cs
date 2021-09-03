using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum VitalityType : byte
	{
		None = 0,

		[RadioReportId("han_m_040239", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
        Normal = 1,

		[RadioReportId("han_m_040240", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
        DiffuseEdema = 2,

        [RadioReportId("han_m_040241", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
        PartialNecrosis = 3,

        [RadioReportId("han_m_040242", InstanceName = nameof(BonesFindingType.ScaphoidPseudoarthrosis))]
        CompleteNecrosis = 4,
    }
}
