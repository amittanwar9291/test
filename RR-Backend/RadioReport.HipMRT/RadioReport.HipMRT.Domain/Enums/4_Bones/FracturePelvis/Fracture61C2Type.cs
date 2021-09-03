using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61C2Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040579", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        CompleteDisruptionThroughIlium = 1,

		[RadioReportId("hip_m_040580", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        CompleteDisruptionThroughSacroiliac = 2,

		[RadioReportId("hip_m_040581", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        ThroughTheSacrum = 3
	}
}
