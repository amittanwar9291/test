using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum FractureAO31CClassificationType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040322", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        FemoralHeadFracture = 1,

		[RadioReportId("hip_m_040323", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        NotFurtherSpecified = 2
	}
}
