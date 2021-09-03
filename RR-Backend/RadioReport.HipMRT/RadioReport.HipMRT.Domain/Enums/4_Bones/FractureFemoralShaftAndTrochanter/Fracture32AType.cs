using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture32AType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040508", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        SpiralFracture = 1,

		[RadioReportId("hip_m_040509", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        ObliqueFracture = 2,

		[RadioReportId("hip_m_040510", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        TransverseFracture = 3
	}
}
