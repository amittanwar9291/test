using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61A1Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040559", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        AnteriorSuperiorIliac = 1,

		[RadioReportId("hip_m_040560", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        AnteriorInferiorIliac = 2,

		[RadioReportId("hip_m_040561", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        IschialTuberosityFracture = 3
	}
}
