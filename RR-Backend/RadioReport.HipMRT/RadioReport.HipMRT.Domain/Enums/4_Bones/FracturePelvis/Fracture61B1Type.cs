using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61B1Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040565", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        LateralCompressionFracture = 1,

		[RadioReportId("hip_m_040566", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        OpenBookFracture = 2
	}
}
