using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FractureWallPartialJointInvolvement : byte
	{
		None = 0,
		
		[RadioReportId("pel_m_100419", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		FracturePosteriorWall = 1,

		[RadioReportId("pel_m_100420", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		FracturePosteriorColumn = 2,

		[RadioReportId("pel_m_100421", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		FractureAnteriorWallOrColumn = 3
	}
}
