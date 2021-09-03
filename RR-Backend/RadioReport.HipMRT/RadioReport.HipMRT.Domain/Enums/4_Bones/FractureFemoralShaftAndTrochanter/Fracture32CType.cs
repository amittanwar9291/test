using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture32CType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040513", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        WithIntactIntermediate = 1,

		[RadioReportId("hip_m_040514", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        WithFragmentedIntermediate = 2
	}
}
