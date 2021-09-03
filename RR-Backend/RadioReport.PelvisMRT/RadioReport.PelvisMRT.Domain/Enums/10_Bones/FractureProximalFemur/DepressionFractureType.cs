using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum DepressionFractureType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100523", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		ChondralLesion = 1,

		[RadioReportId("pel_m_100524", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		DepressionFracture = 2,

		[RadioReportId("pel_m_100525", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		DepressionFractureHeadSplit = 3
	}
}
