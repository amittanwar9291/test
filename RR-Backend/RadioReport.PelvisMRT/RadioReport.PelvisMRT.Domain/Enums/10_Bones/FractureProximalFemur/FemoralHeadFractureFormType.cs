using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FemoralHeadFractureFormType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100408", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		ShearFracture = 1,

		[RadioReportId("pel_m_100409", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		DepressionFracture = 2
	}
}
