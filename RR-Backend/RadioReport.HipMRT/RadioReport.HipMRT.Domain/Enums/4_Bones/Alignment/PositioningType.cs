using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum PositioningType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040305", InstanceName = nameof(BonesFindingType.Alignment))]
        Centered = 1,

		[RadioReportId("hip_m_040306", InstanceName = nameof(BonesFindingType.Alignment))]
        Decentered = 2,

		[RadioReportId("hip_m_040307", InstanceName = nameof(BonesFindingType.Alignment))]
        Dislocated = 3
	}
}
