using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum ShapeType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100357", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Round = 1,

		[RadioReportId("nec_m_100358", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Lobulated = 2,

		[RadioReportId("nec_m_100359", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Geographic = 3,

		[RadioReportId("nec_m_100360", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Broadbased = 4

	}
}
