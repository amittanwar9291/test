using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture31BType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040415", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        Subcapital = 1,

		[RadioReportId("hip_m_040416", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        Transcervical = 2,

		[RadioReportId("hip_m_040417", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        Basicervical = 3
	}
}
