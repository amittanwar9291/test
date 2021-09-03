using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbClassificationType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100315", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		IntactPosteriorPelvic = 1,

		[RadioReportId("pel_m_100316", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		PartialInterruptionPosteriorPelvicRing = 2,

		[RadioReportId("pel_m_100317", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		CompleteInterruptionPosteriorPelvicRing = 3,

		[RadioReportId("pel_m_100318", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		PelvicFractureNotFurther = 4
	}
}
