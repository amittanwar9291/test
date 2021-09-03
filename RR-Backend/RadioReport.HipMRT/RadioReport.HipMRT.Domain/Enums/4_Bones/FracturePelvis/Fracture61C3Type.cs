using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61C3Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040587", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        ExtrasacralFractureOnBothSides = 1,

		[RadioReportId("hip_m_040588", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        SacralOneSideExtraSacralOtherSide = 2,

		[RadioReportId("hip_m_040589", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        SacralFractureOnBothSides = 3
	}
}
