using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum StimulatedBoneMarrowType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040451", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        Trauma = 1,

		[RadioReportId("hip_m_040452", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        StressReaction = 2,

		[RadioReportId("hip_m_040453", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        BoneInfarction = 3,

		[RadioReportId("hip_m_040454", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        Osteonecrosis = 4
	}
}
