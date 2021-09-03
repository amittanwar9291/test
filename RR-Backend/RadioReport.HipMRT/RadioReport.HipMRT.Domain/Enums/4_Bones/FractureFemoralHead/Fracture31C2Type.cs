using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture31C2Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040539", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        ChondralLesion = 1,

		[RadioReportId("hip_m_040540", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        ImpressionImpaction = 2,

		[RadioReportId("hip_m_040541", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        CleftImpression = 3
	}
}
