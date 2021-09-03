using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormC3SubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_1005110", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		ExtrasacralFractureBilateral = 1,

		[RadioReportId("pel_m_1005111", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		UnilateralFractureOsSacrum = 2,

		[RadioReportId("pel_m_1005112", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		FractureOsSacrum = 3
	}
}
