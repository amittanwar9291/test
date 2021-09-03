using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormCType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100434", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		UnilateralCompleteInterruption = 1,

		[RadioReportId("pel_m_100435", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		UnilateralCompleteAndContralateralPartialInterruption = 2,

		[RadioReportId("pel_m_100436", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		BilateralCompleteInterruption = 3
	}
}
