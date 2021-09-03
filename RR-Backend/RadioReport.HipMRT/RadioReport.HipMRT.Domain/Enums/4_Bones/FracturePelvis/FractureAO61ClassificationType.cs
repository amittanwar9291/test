using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum FractureAO61ClassificationType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040334", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        IntactPosteriorArch = 1,

		[RadioReportId("hip_m_040335", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        IncompleteDisruptionOf = 2,

		[RadioReportId("hip_m_040336", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        CompleteDisruptionOf = 3,

		[RadioReportId("hip_m_040337", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        NotFurtherSpecified = 4
	}
}
