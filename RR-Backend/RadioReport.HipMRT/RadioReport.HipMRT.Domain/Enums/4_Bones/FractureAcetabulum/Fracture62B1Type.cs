using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture62B1Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040550", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        InfratectalFracture = 1,

		[RadioReportId("hip_m_040551", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        JuxtatectalFracture = 2,

		[RadioReportId("hip_m_040552", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        TranstectalFracture = 3
	}
}
