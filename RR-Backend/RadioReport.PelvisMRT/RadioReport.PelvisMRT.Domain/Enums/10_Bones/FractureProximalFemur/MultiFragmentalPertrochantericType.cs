using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum MultiFragmentalPertrochantericType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100506", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		MultipleFragmentSingleIntermediateFragment = 1,

		[RadioReportId("pel_m_100507", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		MultipleFragmentTwoMoreIntermediateFragments = 2
	}
}
