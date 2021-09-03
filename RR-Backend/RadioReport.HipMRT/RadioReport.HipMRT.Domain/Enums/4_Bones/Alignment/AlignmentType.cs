using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum AlignmentType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040202", InstanceName = nameof(BonesFindingType.Alignment))]
        RegularJointPosition = 1,

		[RadioReportId("hip_m_040203", InstanceName = nameof(BonesFindingType.Alignment))]
        Pathology = 2
	}
}
