using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum ARCOClassificationType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040459", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        Stage0 = 1,

		[RadioReportId("hip_m_040460", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        Stage1 = 2,

		[RadioReportId("hip_m_040461", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        Stage2 = 3,

		[RadioReportId("hip_m_040462", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        Stage3 = 4,

		[RadioReportId("hip_m_040463", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        Stage4 = 5
	}
}
