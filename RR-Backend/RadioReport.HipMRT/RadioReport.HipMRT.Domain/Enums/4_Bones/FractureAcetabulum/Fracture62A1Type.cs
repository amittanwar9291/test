using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture62A1Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040542", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        SimpleFracture = 1,

		[RadioReportId("hip_m_040543", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        MultifragmentaryFracture = 2
	}
}
