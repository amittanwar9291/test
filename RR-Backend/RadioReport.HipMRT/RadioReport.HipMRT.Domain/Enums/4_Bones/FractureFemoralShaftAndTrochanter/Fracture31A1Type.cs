using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture31A1Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040515", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        TrochantericAvulsionTear = 1,

		[RadioReportId("hip_m_040518", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        FragmentFracture = 2,

		[RadioReportId("hip_m_040519", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        FractureWithIntact = 3
	}
}
