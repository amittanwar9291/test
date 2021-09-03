using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum TrochantericRegionFractureFormType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100402", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		SimplePertrochanteric = 1,

		[RadioReportId("pel_m_100403", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		MultifragmentalPertrochanteric = 2,

		[RadioReportId("pel_m_100404", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		Intertrochanteric = 3
	}
}
