using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum SimplePertrochantericType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100501", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		TrochantericTear = 1,

		[RadioReportId("pel_m_100504", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		TwoFragmentFracture = 2,

		[RadioReportId("pel_m_100505", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		ThreeFragmentFractureDetachementTrochanter = 3
	}
}
