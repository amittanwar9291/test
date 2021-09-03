using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61B3Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040571", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        InternalRotationallyUnstable = 1,

		[RadioReportId("hip_m_040572", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        BilateralLateralCompression = 2,

		[RadioReportId("hip_m_040573", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        OpenBookOrExternalRotation = 3
	}
}
