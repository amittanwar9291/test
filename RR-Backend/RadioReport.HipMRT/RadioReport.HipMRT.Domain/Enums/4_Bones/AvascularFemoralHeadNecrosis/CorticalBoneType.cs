using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum CorticalBoneType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040383", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        Intact = 1,

		[RadioReportId("hip_m_040384", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        Impression = 2
	}
}
