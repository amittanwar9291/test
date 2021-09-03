using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormBType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100431", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		ImmersedLateralCompression = 1,

		[RadioReportId("pel_m_100432", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		OnesidedPartialInterruption = 2,

		[RadioReportId("pel_m_100433", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		BilateralPartialInterruption = 3
	}
}
