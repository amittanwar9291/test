using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture62B2Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040553", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        WithInfratectalTransverse = 1,

		[RadioReportId("hip_m_040554", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        WithJuxtatectalTransverse = 2,

		[RadioReportId("hip_m_040555", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        WithTranstectalTransverse = 3
	}
}
