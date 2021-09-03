using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture31A3Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040522", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        SimpleObliqueFracture = 1,

		[RadioReportId("hip_m_040523", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        SimpleTransverseFracture = 2,

		[RadioReportId("hip_m_040524", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        WedgemultifragmentaryFracture = 3
	}
}
