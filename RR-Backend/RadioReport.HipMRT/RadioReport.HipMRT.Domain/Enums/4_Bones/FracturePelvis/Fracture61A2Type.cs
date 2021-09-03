using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61A2Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040562", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        IliacWingFracture = 1,

		[RadioReportId("hip_m_040563", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        UnilateralFractureOfAnteriorArch = 2,

		[RadioReportId("hip_m_040564", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        BilateralFracturesOfAnteriorArch = 3
	}
}
