using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormA2SubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100541", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		FractureOfIliacCrest = 1,

		[RadioReportId("pel_m_100542", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		UnilateralFractureAnteriorPelvicRing = 2,

		[RadioReportId("pel_m_100592", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		BilateralFractureAnteriorPelvicRing = 3
	}
}
