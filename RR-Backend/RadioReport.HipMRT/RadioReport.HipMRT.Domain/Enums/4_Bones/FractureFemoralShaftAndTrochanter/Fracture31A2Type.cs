using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture31A2Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040520", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        AnIntermediateFragment = 1,

		[RadioReportId("hip_m_040521", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        Intermediate = 2
	}
}
