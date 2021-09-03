using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum HistologyKnownType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100260", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Benign = 1,

		[RadioReportId("nec_m_100261", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Malignant = 2

	}
}
