using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture62A3Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040547", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        FractureOfTheAnteriorWall = 1,

		[RadioReportId("hip_m_040548", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        HighAnteriorColumn = 2,

		[RadioReportId("hip_m_040549", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        LowAnteriorColumn = 3
	}
}
