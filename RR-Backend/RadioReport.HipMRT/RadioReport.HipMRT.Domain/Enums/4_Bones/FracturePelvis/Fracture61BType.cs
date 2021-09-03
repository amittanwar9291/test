using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61BType : byte
	{
		None = 0,

		[RadioReportId("hip_m_0404118", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        WithoutRotationalInstability = 1,

		[RadioReportId("hip_m_0404119", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        RotationalInstabilityUnilateral = 2,

		[RadioReportId("hip_m_0404120", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        BilateralInjuryOfPosteriorArch = 3
	}
}
