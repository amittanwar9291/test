using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture31B2Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040528", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        SimpleFracture = 1,

		[RadioReportId("hip_m_040529", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        MultifragmentaryFracture = 2,

		[RadioReportId("hip_m_040530", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        ShearFracture = 3
	}
}
