using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture32BType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040511", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        WithIntactWedge = 1,

		[RadioReportId("hip_m_040512", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        WithFragmentedWedge = 2
	}
}
