using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture31B1Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040525", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        ValgusimpactedFracture = 1,

		[RadioReportId("hip_m_040526", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        NondisplacedFracture = 2,

		[RadioReportId("hip_m_040527", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        DisplacedFracture = 3
	}
}
