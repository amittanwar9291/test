using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum FractureAO31BClassificationType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040317", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        FemoralNeckFracture = 1,

		[RadioReportId("hip_m_040318", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        NotFurtherSpecified = 2
	}
}
