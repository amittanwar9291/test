using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture62AType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040420", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        FractureOfThePosteriorWall = 1,

		[RadioReportId("hip_m_040421", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        FractureOfThePosteriorColumn = 2,

		[RadioReportId("hip_m_040422", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        FractureOfThePosteriorWallOrColumn = 3
	}
}
