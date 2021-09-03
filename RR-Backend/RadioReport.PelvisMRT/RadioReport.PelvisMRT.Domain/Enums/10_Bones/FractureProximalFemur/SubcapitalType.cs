using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum SubcapitalType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100511", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		ValgusImpactedFracture = 1,

		[RadioReportId("pel_m_100512", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		NonDisplacedFracture = 2,

		[RadioReportId("pel_m_100513", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		DisplacedFracture = 3
	}
}
