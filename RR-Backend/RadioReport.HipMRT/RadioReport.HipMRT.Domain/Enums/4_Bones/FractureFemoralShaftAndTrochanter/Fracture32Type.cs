using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture32Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040409", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        SimpleFracture = 1,

		[RadioReportId("hip_m_040410", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        WedgeFracture = 2,

		[RadioReportId("hip_m_040411", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        MultifragmentaryFracture = 3
	}
}
