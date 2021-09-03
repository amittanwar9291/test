using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture31AType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040412", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        SimplePertrochanteric = 1,

		[RadioReportId("hip_m_040413", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        MultifragmentaryPertrochantericLateral = 2,

		[RadioReportId("hip_m_040414", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        Intertrochanteric = 3
	}
}
