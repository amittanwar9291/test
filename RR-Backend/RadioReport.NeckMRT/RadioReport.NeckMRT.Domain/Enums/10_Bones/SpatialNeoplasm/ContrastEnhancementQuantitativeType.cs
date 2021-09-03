using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum ContrastEnhancementQuantitativeType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100277", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		No = 1,

		[RadioReportId("nec_m_100278", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Weak = 2,

		[RadioReportId("nec_m_100279", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Strong = 3

	}
}
