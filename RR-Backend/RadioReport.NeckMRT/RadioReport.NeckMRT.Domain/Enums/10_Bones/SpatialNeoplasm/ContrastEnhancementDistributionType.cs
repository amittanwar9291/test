using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum ContrastEnhancementDistributionType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100283", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Peripheral = 1,

		[RadioReportId("nec_m_100284", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Central = 2,

		[RadioReportId("nec_m_100285", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		EntireLesion = 3,

		[RadioReportId("nec_m_100286", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Septal = 4,

		[RadioReportId("nec_m_100287", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Nidus = 5

	}
}
