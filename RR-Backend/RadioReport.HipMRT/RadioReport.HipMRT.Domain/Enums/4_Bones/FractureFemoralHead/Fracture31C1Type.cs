using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture31C1Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040536", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        AvulsionOfTheLigamentumCapitisFemoris = 1,

		[RadioReportId("hip_m_040537", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        InfrafovealSplitFracture = 2,

		[RadioReportId("hip_m_040538", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        SplitFractureSuprafoveal = 3
	}
}
