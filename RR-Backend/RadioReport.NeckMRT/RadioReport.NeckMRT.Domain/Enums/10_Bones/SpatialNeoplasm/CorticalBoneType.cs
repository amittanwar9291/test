

using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum CorticalBoneType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100362", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Intact = 1,

		[RadioReportId("nec_m_100363", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Destruction = 2,

		[RadioReportId("nec_m_100364", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Thinningscalopping = 3,

		[RadioReportId("nec_m_100365", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		NeocorticalBone = 4

	}
}
