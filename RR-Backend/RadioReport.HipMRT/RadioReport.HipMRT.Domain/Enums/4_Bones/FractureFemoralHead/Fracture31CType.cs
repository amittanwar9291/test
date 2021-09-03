using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture31CType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040418", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        SplitFracture = 1,

		[RadioReportId("hip_m_040419", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        DepressionFracture = 2
	}
}
