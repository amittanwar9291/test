using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture62B3Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040556", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        WithAssociatedFracture = 1,

		[RadioReportId("hip_m_040557", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        HighAnteriorColumn = 2,

		[RadioReportId("hip_m_040558", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        LowAnteriorColumn = 3
	}
}
