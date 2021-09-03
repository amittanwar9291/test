using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100273", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Circumscribed = 1,

		[RadioReportId("nec_m_100274", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Noncircumscribed = 2,

		[RadioReportId("nec_m_100275", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		MixedType = 3

	}
}
