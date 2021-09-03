using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61C1Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040575", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        WithIliacFracture = 1,

		[RadioReportId("hip_m_040576", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        FractureThroughTheSacroiliacJoint = 2,

		[RadioReportId("hip_m_040577", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        WithSacralFracture = 3
	}
}
